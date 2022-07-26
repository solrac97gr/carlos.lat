import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { BLOG_URL } from "../../lib/consts";
import { BlogBanner } from "../../components/BlogBanner";
import { useState } from "react";
import { CategoriesFilter } from "../../components/CategoriesFilter";
import { BlogCard } from "../../components/BlogCard";
import { BlogGrids } from "../../components/BlogGrids";

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
    <div className={styles.container}>
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
      <main className={styles.main}>
        <BlogBanner post={lastPost} />
        <CategoriesFilter
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          topics={topics}
        />
        <BlogGrids filter={filter} posts={posts} />
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
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
