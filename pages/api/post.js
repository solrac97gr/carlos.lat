import { getFileBySlug, hasTranslation } from '../../lib/mdx';

export default async function handler(req, res) {
  const { slug, lang } = req.query;
  
  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  const targetLang = lang || 'es';
  
  try {
    // Check if translation exists in target language
    const translationExists = hasTranslation(slug, targetLang);
    
    if (!translationExists) {
      // Fallback to opposite language
      const fallbackLang = targetLang === 'en' ? 'es' : 'en';
      if (hasTranslation(slug, fallbackLang)) {
        const { source, frontmatter } = await getFileBySlug(slug, fallbackLang);
        return res.status(200).json({ source, frontmatter });
      }
      return res.status(404).json({ error: 'Post not found' });
    }

    const { source, frontmatter } = await getFileBySlug(slug, targetLang);
    return res.status(200).json({ source, frontmatter });
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
