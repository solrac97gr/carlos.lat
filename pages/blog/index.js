import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { BLOG_URL } from "../../consts";



export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlos97gr 👨🏽‍💻 | Blog</title>
        <meta
          name="description"
          content="Creando contenido mientras programo."
        />
        <meta name="keywords" content="backend go development" />
        <meta name="author" content="Carlos García" />
        <meta
          property="og:title"
          content="carlos97gr 👨🏽‍💻 | Blog"
        />
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
        <div className={styles.grid}>
          {posts.map((post) => {
            return (
              <Link href={`/blog/${post.slug}`} key={post.title + post.date}>
                <a className={styles.card}>
                  <Image
                    src={post.image}
                    alt="go-wallpaper"
                    width="500px"
                    height="250px"
                    unoptimized
                    style={{
                      overFlow: "hidden",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  ></Image>
                  <div className={styles.cardcontent}>
                    <h3>{post.title} &rarr;</h3>
                    <small>{post.date}</small>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
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
