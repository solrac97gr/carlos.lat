import { getAllFilesMetadata } from "../../lib/mdx";
import Head from "next/head";
import { BLOG_URL } from "../../lib/consts";
import { BlogBanner } from "../../components/BlogBanner";
import { useState } from "react";
import { CategoriesFilter } from "../../components/CategoriesFilter";
import { BlogGrids } from "../../components/BlogGrids";
import { useLanguage } from "../../lib/LanguageContext";
import styled from "styled-components";

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
  const [filter, SetFilter] = useState("Todos");

  const handleChangeFilter = (topic) => {
    if (filter === topic) {
      SetFilter("Todos");
    } else {
      SetFilter(topic);
    }
  };

  return (
    <PageContainer>
      <Head>
        <title>Blog | carlos97gr 👨🏽‍💻</title>
        <meta
          name="description"
          content="Creando contenido mientras programo."
        />
        <meta name="keywords" content="backend go development" />
        <meta name="author" content="Carlos García" />
        <meta property="og:title" content="carlos97gr 👨🏽‍💻 | Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BLOG_URL} />
        <meta
          property="og:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta
          name="twitter:title"
          content="carlos97gr 👨🏽‍💻 | Backend, Go, Flutter, Firebase, Rust"
        />
        <meta
          name="twitter:description"
          content="Creando contenido mientras programo."
        />
        <meta
          name="twitter:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
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
  const topics = ["Todos"];
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
