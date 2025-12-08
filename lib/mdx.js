import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import { calculateReadingTime } from "./helpers";
import { getSanityPosts, getSanityPostBySlug, normalizeSanityPost } from "./sanity";

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

// Get available languages for a specific slug
export const getAvailableLanguages = (slug) => {
  const languages = [];
  ["en", "es"].forEach((lang) => {
    if (hasTranslation(slug, lang)) {
      languages.push(lang);
    }
  });
  return languages;
};

export const getFileBySlug = async (slug, lang = "es") => {
  // First, try to get from Sanity
  try {
    const sanityPost = await getSanityPostBySlug(slug, lang);
    if (sanityPost) {
      const normalizedPost = normalizeSanityPost(sanityPost);
      const source = await serialize(normalizedPost.body, {
        mdxOptions: {
          rehypePlugins: [mdxPrism],
          format: "mdx",
        },
      });
      
      return {
        source,
        frontmatter: {
          ...normalizedPost,
          slug,
          lang,
          availableLanguages: getAvailableLanguages(slug),
          readingTime: calculateReadingTime(normalizedPost.body),
        },
      };
    }
  } catch (error) {
    console.log(`Sanity fetch failed for ${slug}, falling back to MDX files`);
  }

  // Fallback to MDX files
  const filePath = path.join(root, "data", lang, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    // Fallback to Spanish if English doesn't exist
    const fallbackPath = path.join(root, "data", "es", `${slug}.mdx`);
    if (fs.existsSync(fallbackPath)) {
      const mdxSource = fs.readFileSync(fallbackPath, "utf-8");
      const { data, content } = await matter(mdxSource);
      const source = await serialize(content, {
        mdxOptions: {
          rehypePlugins: [mdxPrism],
          format: "mdx",
        },
      });

      return {
        source,
        frontmatter: {
          slug,
          lang: "es",
          availableLanguages: getAvailableLanguages(slug),
          ...data,
        },
      };
    }
    throw new Error(`File not found: ${slug}`);
  }

  const mdxSource = fs.readFileSync(filePath, "utf-8");
  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
      format: "mdx",
    },
  });

  return {
    source,
    frontmatter: {
      slug,
      lang,
      availableLanguages: getAvailableLanguages(slug),
      readingTime: calculateReadingTime(content),
      ...data,
    },
  };
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
          availableLanguages: getAvailableLanguages(postSlug.replace(".mdx", "")),
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
        availableLanguages: [], // TODO: Check Sanity for translations
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
