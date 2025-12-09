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
  // First, try to get from Sanity (now with Portable Text)
  // Try requested language first, then fallback to other language
  try {
    let sanityPost = await getSanityPostBySlug(slug, lang);
    
    // If not found in requested language, try the other language
    if (!sanityPost) {
      const fallbackLang = lang === 'es' ? 'en' : 'es';
      sanityPost = await getSanityPostBySlug(slug, fallbackLang);
    }
    
    if (sanityPost) {
      const normalizedPost = normalizeSanityPost(sanityPost);
      const availableLanguages = await getAvailableLanguages(slug);
      
      // Return Portable Text content directly, no MDX serialization
      return {
        source: null, // No MDX source for Portable Text posts
        frontmatter: {
          ...normalizedPost,
          availableLanguages,
        },
      };
    }
  } catch (error) {
    // If not in Sanity or error, try MDX files
  }

  // Fall back to MDX files
  // Try requested language first, no fallback for MDX
  const filePath = path.join(root, "data", lang, `${slug}.mdx`);
  
  if (fs.existsSync(filePath)) {
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

  // Get Sanity posts (with Portable Text)
  let sanityPosts = [];
  try {
    const posts = await getSanityPosts(lang);
    sanityPosts = posts.map(post => {
      const normalized = normalizeSanityPost(post);
      // Estimate reading time for Portable Text (rough calculation)
      const textBlocks = post.body?.filter(block => block._type === 'block') || [];
      const estimatedWords = textBlocks.reduce((total, block) => {
        const text = block.children?.map(child => child.text).join(' ') || '';
        return total + text.split(/\s+/).length;
      }, 0);
      
      return {
        ...normalized,
        readingTime: Math.ceil(estimatedWords / 200) + ' min', // ~200 words per minute
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
