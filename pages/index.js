import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllFilesMetadata } from "../lib/mdx";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos García</title>
        <meta
          name="description"
          content="Creando contenido mientras programo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Carlos García</h1>
        <div className={styles.grid}>
          {posts.map((post) => {
            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.title + post.date}
              >
                <a className={styles.card}>
                  <Image src={post.image} alt="go-wallpaper" width="500px" height="250px"></Image>
                  <h2>{post.title} &rarr;</h2>
                  <small>{post.date}</small>
                  <br></br>
                  <small>{post.abstract}</small>
                </a>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
