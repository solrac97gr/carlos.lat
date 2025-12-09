import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 's0zyxw39',
  dataset: 'production',
  useCdn: true, // Enable CDN for faster response times
  apiVersion: '2025-12-09', // Use current date as API version
});

// Helper to generate image URLs from Sanity image references
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

/**
 * Get all published blog posts from Sanity
 * @param {string} lang - Language filter ('es' or 'en')
 * @returns {Promise<Array>} Array of blog posts
 */
export async function getSanityPosts(lang = 'es') {
  const query = `*[_type == "post" && language == $lang && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    abstract,
    mainImage,
    tag,
    author,
    body,
    language
  }`;
  
  return sanityClient.fetch(query, { lang });
}

/**
 * Get all posts including drafts (for development)
 * @param {string} lang - Language filter ('es' or 'en')
 * @returns {Promise<Array>} Array of blog posts
 */
export async function getAllSanityPosts(lang = 'es') {
  const query = `*[_type == "post" && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    abstract,
    mainImage,
    tag,
    author,
    body,
    language,
    status
  }`;
  
  return sanityClient.fetch(query, { lang });
}

/**
 * Get a single post by slug with Portable Text body
 * @param {string} slug - Post slug
 * @param {string} lang - Language ('es' or 'en')
 * @returns {Promise<Object>} Single blog post with Portable Text
 */
export async function getSanityPostBySlug(slug, lang = 'es') {
  const query = `*[_type == "post" && slug.current == $slug && language == $lang && status == "published"][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "date": publishedAt,
    abstract,
    mainImage,
    tag,
    author,
    body,
    language,
    status
  }`;
  
  return sanityClient.fetch(query, { slug, lang });
}

/**
 * Convert Sanity post to format compatible with existing posts
 * Now returns Portable Text body directly without MDX conversion
 * @param {Object} sanityPost - Post from Sanity
 * @returns {Object} Post with Portable Text body
 */
export function normalizeSanityPost(sanityPost) {
  if (!sanityPost) return null;
  
  const publishedDate = new Date(sanityPost.publishedAt);
  
  return {
    title: sanityPost.title,
    slug: sanityPost.slug,
    published: sanityPost.publishedAt,
    date: publishedDate.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    abstract: sanityPost.abstract,
    image: sanityPost.mainImage ? urlFor(sanityPost.mainImage).width(1200).url() : '',
    tag: sanityPost.tag,
    author: sanityPost.author,
    lang: sanityPost.language,
    portableTextContent: sanityPost.body, // Portable Text array
    isPortableText: true, // Flag to render with PortableText component
    source: 'sanity',
    isDraft: sanityPost.status === 'draft',
  };
}

/**
 * Get available languages for a Sanity post slug
 * @param {string} slug - Post slug
 * @returns {Promise<Array>} Array of available language codes
 */
export async function getSanityAvailableLanguages(slug) {
  const query = `*[_type == "post" && slug.current == $slug] {
    language
  }`;
  
  try {
    const posts = await sanityClient.fetch(query, { slug });
    return posts.map(post => post.language);
  } catch (error) {
    console.error('Error fetching Sanity languages:', error);
    return [];
  }
}
