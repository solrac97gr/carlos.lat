import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { BLOG_URL } from "../../lib/consts";
import { BlogBanner } from "../../components/BlogBanner";
import { useState } from "react";

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
        <title>carlos97gr 👨🏽‍💻 | Blog</title>
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
        <h2>Categorías</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {topics.map((topic) => (
            <p
              onClick={() => handleChangeFilter(topic)}
              style={{
                marginRight: 5,
                fontSize: 13,
                fontWeight: 400,
                padding: 5,
                borderRadius: 3,
                border: 1,
                borderColor: "#63f3ab",
                borderStyle: "solid",
                color: "#63f3ab",
                cursor: "pointer",
              }}
              key={topic}
              className={topic === filter && "isActiveFilter"}
            >
              {topic}
            </p>
          ))}
        </div>
        <div className={styles.grid}>
          {filter === "Todos"
            ? posts.map((post) => {
                return (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.title + post.date}
                  >
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
                        <h3>{post.title}</h3>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          {post.tag?.split(", ").map((tag) => {
                            return (
                              <p
                                style={{
                                  marginRight: 5,
                                  fontSize: 13,
                                  fontWeight: 400,
                                  padding: 5,
                                  borderRadius: 3,
                                  border: 1,
                                  borderColor: "#63f3ab",
                                  borderStyle: "solid",
                                  color: "#63f3ab",
                                }}
                                key={tag}
                              >
                                {tag}
                              </p>
                            );
                          })}
                        </div>

                        <small>{post.date}</small>
                      </div>
                    </a>
                  </Link>
                );
              })
            : posts
                .filter((post) => {
                  return post.tag.split(", ").includes(filter);
                })
                .map((post) => {
                  return (
                    <Link
                      href={`/blog/${post.slug}`}
                      key={post.title + post.date}
                    >
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
                          <h3>{post.title}</h3>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            {post.tag?.split(", ").map((tag) => {
                              return (
                                <p
                                  style={{
                                    marginRight: 5,
                                    fontSize: 13,
                                    fontWeight: 400,
                                    padding: 5,
                                    borderRadius: 3,
                                    border: 1,
                                    borderColor: "#63f3ab",
                                    borderStyle: "solid",
                                    color: "#63f3ab",
                                  }}
                                  key={tag}
                                >
                                  {tag}
                                </p>
                              );
                            })}
                          </div>

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
  const lastPost = posts[0];
  const topics = ["Todos"];
  posts.forEach((post) => {
    post.tag.split(", ").forEach((topic) => {
      if (!topics.includes(topic)) {
        topics.push(topic);
      }
    });
  });

  return {
    props: { posts, lastPost, topics },
  };
}
