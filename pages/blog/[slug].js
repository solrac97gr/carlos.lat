import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { BlogContainer } from "../../components/BlogContainer";
import Head from "next/head";
import { BLOG_URL, PAGE_URL } from "../../consts";
import { useEffect } from "react";

export default function Post({ source, frontmatter }) {
  useEffect(()=>{
    console.log(frontmatter)
  })
  return (
    <div>
      <Head>
        <title>{`carlos97gr 👨🏽‍💻 | ${frontmatter.title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={frontmatter.abstract} />
        <meta name="keywords" content={frontmatter.tag} />
        <meta name="author" content={`${PAGE_URL}/sobre-mi}`} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BLOG_URL}/${frontmatter.slug}`} />
        <meta property="og:image" content={frontmatter.image} />
        <meta property="article:published_time" content={frontmatter.date} />
        <meta property="article:tag" content={frontmatter.tag} />
        <meta property="article:author" content={`${PAGE_URL}/sobre-mi}`} />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.abstract} />
        <meta name="twitter:image" content={frontmatter.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <BlogContainer>
        <MDXRemote {...source} components={MDXComponents} />
      </BlogContainer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const post = getFiles();
  const paths = post.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
