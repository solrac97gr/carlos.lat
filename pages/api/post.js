import { getFileBySlug } from '../../lib/mdx';

export default async function handler(req, res) {
  const { slug, lang } = req.query;
  
  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  const targetLang = lang || 'en'; // Default to English
  
  try {
    // Try to get the post in the requested language
    const { source, frontmatter } = await getFileBySlug(slug, targetLang);
    return res.status(200).json({ source, frontmatter });
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(404).json({ error: 'Post not found in requested language' });
  }
}
