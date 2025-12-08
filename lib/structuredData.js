import { PAGE_URL, BLOG_URL } from './consts';

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Carlos García",
  "url": PAGE_URL,
  "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/images%2FFUAQvEkXoAAuQ-2.jpg-large.jpeg?alt=media&token=959951bf-5f60-4ecd-9ddf-74511f0ff3fa",
  "jobTitle": "Software Engineer & IT Consultant",
  "description": "Software Engineer specializing in Go, Backend Development, AI, and Data Intelligence. IT Consultant helping businesses leverage technology for growth.",
  "knowsAbout": [
    "Go (Golang)",
    "Backend Development",
    "Artificial Intelligence",
    "Data Intelligence",
    "Cloud Computing",
    "Software Architecture",
    "IT Consulting",
    "MongoDB",
    "Docker",
    "Microservices"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/carlos97gr/",
    "https://github.com/solrac97gr",
    "https://twitter.com/carlosgarca97gr",
    "https://medium.com/@carlos97gr"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Málaga",
    "addressRegion": "Andalucía",
    "addressCountry": "ES"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Universidad"
  }
});

export const getArticleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.abstract,
  "image": post.image,
  "datePublished": post.published,
  "dateModified": post.published,
  "author": {
    "@type": "Person",
    "name": post.author || "Carlos García",
    "url": PAGE_URL
  },
  "publisher": {
    "@type": "Person",
    "name": "Carlos García",
    "url": PAGE_URL
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${BLOG_URL}/${post.slug}`
  },
  "keywords": post.tag,
  "articleSection": post.tag,
  "inLanguage": post.lang || "es"
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Carlos García - Software Engineer & IT Consultant",
  "description": "Strategic IT Consulting & Software Development. Specializing in AI, Data Intelligence, and Backend Development with Go.",
  "url": PAGE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BLOG_URL}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const getBlogSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Carlos García Blog",
  "description": "Technical blog about Go, Backend Development, AI, and Software Engineering",
  "url": BLOG_URL,
  "author": {
    "@type": "Person",
    "name": "Carlos García",
    "url": PAGE_URL
  },
  "inLanguage": ["es", "en"]
});
