const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const root = process.cwd();
const BLOG_URL = 'https://carlos.lat/blog';
const PAGE_URL = 'https://carlos.lat';

function getFiles(lang) {
  const langPath = path.join(root, 'data', lang);
  if (!fs.existsSync(langPath)) return [];
  return fs.readdirSync(langPath, 'utf-8');
}

function getAllFilesMetadata(lang) {
  const files = getFiles(lang);
  return files
    .reduce((allPosts, postSlug) => {
      const mdxSource = fs.readFileSync(
        path.join(root, 'data', lang, postSlug),
        'utf-8'
      );
      const { data } = matter(mdxSource);
      return [
        { 
          ...data, 
          slug: postSlug.replace('.mdx', ''),
          lang
        }, 
        ...allPosts
      ];
    }, [])
    .filter(post => post.published);
}

function generateRSSFeed(posts, lang) {
  const feedItems = posts
    .sort((a, b) => new Date(b.published) - new Date(a.published))
    .map(post => {
      const postUrl = `${BLOG_URL}/${post.slug}`;
      const pubDate = new Date(post.published).toUTCString();
      
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.abstract}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${post.tag}</category>
      <author>Carlos García</author>
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg" />` : ''}
    </item>`;
    }).join('');

  const languageLabel = lang === 'es' ? 'Español' : 'English';
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Carlos García Blog - ${languageLabel}</title>
    <description>Technical blog about Go, Backend Development, AI, and Software Engineering</description>
    <link>${PAGE_URL}</link>
    <language>${lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${PAGE_URL}/rss-${lang}.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${PAGE_URL}/logo.png</url>
      <title>Carlos García Blog</title>
      <link>${PAGE_URL}</link>
    </image>
    ${feedItems}
  </channel>
</rss>`;

  return rss;
}

function generateAllRSSFeeds() {
  const languages = ['es', 'en'];
  
  languages.forEach(lang => {
    const posts = getAllFilesMetadata(lang);
    if (posts.length > 0) {
      const rss = generateRSSFeed(posts, lang);
      const filename = `rss-${lang}.xml`;
      fs.writeFileSync(path.join(root, 'public', filename), rss);
      console.log(`✅ Generated ${filename} with ${posts.length} posts`);
    }
  });

  // Generate combined RSS feed (all languages)
  const allPosts = [...getAllFilesMetadata('es'), ...getAllFilesMetadata('en')];
  const combinedRSS = generateRSSFeed(allPosts, 'es');
  fs.writeFileSync(path.join(root, 'public', 'rss.xml'), combinedRSS);
  console.log(`✅ Generated rss.xml with ${allPosts.length} total posts`);
}

generateAllRSSFeeds();
