import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import { calculateReadingTime } from "./helpers";
import { getSanityPosts, getSanityPostBySlug, normalizeSanityPost, getSanityAvailableLanguages } from "./sanity";

const root = process.cwd();

// Get files from a specific language folder
export const getFiles = (lang = "es") => {
  const langPath = path.join(root, "data", lang);
  if (!fs.existsSync(langPath)) return [];
  return fs.readdirSync(langPath, "utf-8");
};

// Check if a translation exists for a given slug
export const hasTranslation = (slug, lang) => {
  const filePath = path.join(root, "data", lang, `${slug}.mdx`);
  return fs.existsSync(filePath);
};

// Get available languages for a specific slug (checks both MDX and Sanity)
export const getAvailableLanguages = async (slug) => {
  const languages = [];
  
  // Check MDX files
  ["en", "es"].forEach((lang) => {
    if (hasTranslation(slug, lang)) {
      languages.push(lang);
    }
  });
  
  // Check Sanity
  try {
    const sanityLanguages = await getSanityAvailableLanguages(slug);
    sanityLanguages.forEach(lang => {
      if (!languages.includes(lang)) {
        languages.push(lang);
      }
    });
  } catch (error) {
    // Silently fail, MDX languages are enough
  }
  
  return languages;
};

export const getFileBySlug = async (slug, lang = "es") => {
  // First, try to get from Sanity
  try {
    const sanityPost = await getSanityPostBySlug(slug, lang);
    
    if (sanityPost) {
      const normalizedPost = normalizeSanityPost(sanityPost);
      
      // Escape Go channel operators that MDX might misinterpret as JSX
      // This fixes issues with <-chan and chan<- syntax
      let bodyContent = normalizedPost.body;
      
      try {
        const source = await serialize(bodyContent, {
          mdxOptions: {
            rehypePlugins: [mdxPrism],
            format: "mdx",
          },
        });
        
        const availableLanguages = await getAvailableLanguages(slug);
        
        return {
          source,
          frontmatter: {
            ...normalizedPost,
            availableLanguages,
          },
        };
      } catch (mdxError) {
        console.error(`\n❌ MDX Compilation Error for "${slug}":`);
        console.error(`Message: ${mdxError.message}`);
        if (mdxError.line) {
          const lines = normalizedPost.body.split('\n');
          const start = Math.max(0, mdxError.line - 3);
          const end = Math.min(lines.length, mdxError.line + 2);
          console.error(`\nContext (lines ${start + 1}-${end + 1}):`);
          for (let i = start; i < end; i++) {
            const marker = i === mdxError.line - 1 ? '>>>' : '   ';
            console.error(`${marker} ${i + 1}: ${lines[i]}`);
          }
        }
        throw mdxError;
      }
    }
  } catch (error) {
    // If not in Sanity or error, try MDX files
  }

  // Fall back to MDX files
  const possiblePaths = [
    path.join(root, "data", lang, `${slug}.mdx`),
    path.join(root, "data", "es", `${slug}.mdx`),
    path.join(root, "data", "en", `${slug}.mdx`),
  ];

  let filePath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      filePath = p;
      const pathLang = p.includes("/en/") ? "en" : "es";
      if (pathLang !== lang) {
        lang = pathLang;
      }
      break;
    }
  }

  if (filePath) {
    const mdxSource = fs.readFileSync(filePath, "utf-8");
    const { data, content } = await matter(mdxSource);
    const source = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [mdxPrism],
        format: "mdx",
      },
    });

    const availableLanguages = await getAvailableLanguages(slug);

    return {
      source,
      frontmatter: {
        slug,
        lang,
        availableLanguages,
        readingTime: calculateReadingTime(content),
        ...data,
      },
    };
  }
  
  throw new Error(`Post not found: ${slug} (lang: ${lang})`);
};

export const getAllFilesMetadata = async (lang = "es") => {
  // Get MDX files
  const files = getFiles(lang);
  const mdxPosts = files
    .reduce((allPosts, postSlug) => {
      const mdxSource = fs.readFileSync(
        path.join(root, "data", lang, postSlug),
        "utf-8"
      );
      const { data, content } = matter(mdxSource);
      return [
        { 
          ...data, 
          slug: postSlug.replace(".mdx", ""),
          lang,
          availableLanguages: [], // Resolved on individual post pages
          readingTime: calculateReadingTime(content),
          source: 'mdx' // Mark as coming from MDX files
        }, 
        ...allPosts
      ];
    }, []);

  // Get Sanity posts
  let sanityPosts = [];
  try {
    const posts = await getSanityPosts(lang);
    sanityPosts = posts.map(post => {
      const normalized = normalizeSanityPost(post);
      return {
        ...normalized,
        readingTime: calculateReadingTime(normalized.body),
        availableLanguages: [], // Resolved on individual post pages
      };
    });
  } catch (error) {
    console.log('Failed to fetch Sanity posts, using MDX only');
  }

  // Combine and sort by date
  return [...mdxPosts, ...sanityPosts]
    .sort((a, b) => new Date(b.published) - new Date(a.published));
};

export const getNumberOfPosts = (lang = "es") => {
  return getFiles(lang).length;
};

// Get all unique slugs from both MDX files and Sanity
export const getAllSlugs = async () => {
  // Get MDX slugs
  const enPosts = getFiles("en").map(post => post.replace(/\.mdx/, ""));
  const esPosts = getFiles("es").map(post => post.replace(/\.mdx/, ""));
  
  // Get Sanity slugs
  let sanitySlugs = [];
  try {
    const [enSanityPosts, esSanityPosts] = await Promise.all([
      getSanityPosts('en'),
      getSanityPosts('es')
    ]);
    sanitySlugs = [...enSanityPosts, ...esSanityPosts].map(post => post.slug.current);
  } catch (error) {
    console.log('Failed to fetch Sanity slugs, using MDX only');
  }
  
  // Combine and deduplicate
  return Array.from(new Set([...enPosts, ...esPosts, ...sanitySlugs]));
};
