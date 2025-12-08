import { getAllFilesMetadata } from './mdx';
import { BLOG_URL, PAGE_URL } from './consts';

export function generateRSSFeed(posts) {
  const feedItems = posts
    .filter(post => post.published)
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

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Carlos García Blog</title>
    <description>Technical blog about Go, Backend Development, AI, and Software Engineering</description>
    <link>${PAGE_URL}</link>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${PAGE_URL}/rss.xml" rel="self" type="application/rss+xml" />
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

export function generateRSSForLanguage(lang) {
  const posts = getAllFilesMetadata(lang);
  return generateRSSFeed(posts);
}
