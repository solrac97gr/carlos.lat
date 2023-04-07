import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { BlogContainer } from "../../components/BlogContainer";
import Head from "next/head";
import { BLOG_URL, PAGE_URL } from "../../lib/consts";
import { SocialShareButtons } from "../../components/SocialShareButtons";

export default function Post({ source, frontmatter }) {
  return (
    <div>
      <Head>
        <title>{`${frontmatter.title} | carlos97gr 👨🏽‍💻 `}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={frontmatter.abstract} />
        <meta name="keywords" content={frontmatter.tag} />
        <meta name="author" content={`${PAGE_URL}/sobre-mi`} />
        <meta property="og:title" content={frontmatter.title} />
        <meta name="og:description" content={frontmatter.abstract} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BLOG_URL}/${frontmatter.slug}`} />
        <meta property="og:image" content={frontmatter.image} />
        <meta
          property="article:published_time"
          content={frontmatter.published}
        />
        <meta property="article:tag" content={frontmatter.tag} />
        <meta property="article:author" content={`${PAGE_URL}/sobre-mi`} />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.abstract} />
        <meta name="twitter:image" content={frontmatter.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          src="https://giscus.app/client.js"
          data-repo="solrac97gr/carlos.lat"
          data-repo-id="R_kgDOHl_QEQ"
          data-category="General"
          data-category-id="DIC_kwDOHl_QEc4CQrs_"
          data-mapping="title"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="dark_dimmed"
          data-lang="es"
          data-loading="lazy"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <BlogContainer>
        <MDXRemote {...source} components={MDXComponents} />
        <div className="giscus"></div>
        <SocialShareButtons post={frontmatter}></SocialShareButtons>
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
