import { getAllFilesMetadata } from "../../lib/mdx";
import Head from "next/head";
import { BLOG_URL } from "../../lib/consts";
import { BlogBanner } from "../../components/BlogBanner";
import { useState } from "react";
import { CategoriesFilter } from "../../components/CategoriesFilter";
import { BlogGrids } from "../../components/BlogGrids";
import { useLanguage } from "../../lib/LanguageContext";
import { Footer } from "../../components/Footer";
import styled from "styled-components";
import { useEffect } from "react";
import { getBlogSchema, getBreadcrumbSchema } from "../../lib/structuredData";
import { PAGE_URL } from "../../lib/consts";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export default function Blog({ posts, lastPost, topics }) {
  const { t } = useLanguage();
  const [filter, SetFilter] = useState("All");

  useEffect(() => {
    SetFilter("All");
  }, []);

  const handleChangeFilter = (topic) => {
    if (filter === topic) {
      SetFilter("All");
    } else {
      SetFilter(topic);
    }
  };

  const blogSchema = getBlogSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: PAGE_URL },
    { name: "Blog", url: BLOG_URL }
  ]);

  const metaDescription = `Technical blog about Go, Backend Development, AI, and Software Engineering. ${posts.length} articles covering topics like ${topics.slice(1, 4).join(', ')} and more.`;

  return (
    <PageContainer>
      <Head>
        <title>Blog | Carlos García 👨🏽‍💻 - Go, Backend, AI & Software Engineering</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta name="keywords" content="Go, Golang, Backend Development, AI, Software Engineering, MongoDB, Docker, Microservices, Rust" />
        <meta name="author" content="Carlos García" />
        <meta property="og:title" content="Blog | Carlos García - Technical Articles on Go & Backend Development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BLOG_URL} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta
          name="twitter:title"
          content="Blog | Carlos García - Go, Backend, AI"
        />
        <meta
          name="twitter:description"
          content={metaDescription}
        />
        <meta
          name="twitter:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <MainContent>
        <BlogBanner post={lastPost} />
        <CategoriesFilter
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          topics={topics}
        />
        <BlogGrids filter={filter} posts={posts} />
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
export async function getStaticProps() {
  // Get posts preferring English, fallback to Spanish
  const enPosts = await getAllFilesMetadata("en");
  const esPosts = await getAllFilesMetadata("es");
  
  // Merge posts, preferring English versions
  const postsMap = new Map();
  
  // Add Spanish posts first
  esPosts.forEach(post => {
    postsMap.set(post.slug, post);
  });
  
  // Override with English posts if available
  enPosts.forEach(post => {
    postsMap.set(post.slug, post);
  });
  
  const posts = Array.from(postsMap.values())
    .sort((a, b) => new Date(b.published) - new Date(a.published));
  
  const lastPost = posts[0];
  const topics = ["All"];
  posts.forEach((post) => {
    post.tag?.split(", ").forEach((topic) => {
      if (!topics.includes(topic)) {
        topics.push(topic);
      }
    });
  });

  return {
    props: { posts, lastPost, topics },
  };
}
