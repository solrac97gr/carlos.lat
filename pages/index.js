import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllFilesMetadata } from "../lib/mdx";
import Link from "next/link";
import { PAGE_URL } from "../lib/consts";
import { Hero } from "../components/Hero";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          carlos97gr 👨🏽‍💻 | Backend, Go, Flutter, Firebase, Rust y más
        </title>
        <meta
          name="description"
          content="Creando contenido mientras programo."
        />
        <meta name="keywords" content="backend go development" />
        <meta name="author" content="Carlos García" />
        <meta
          property="og:title"
          content="carlos97gr 👨🏽‍💻 | Backend, Go, Flutter, Firebase, Rust"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
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
        <Hero numberOfPosts={posts.length}></Hero>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
