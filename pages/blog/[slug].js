import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import {BlogContainer} from '../../components/BlogContainer'

export default function Post({ source, frontmatter }) {
  return (
    <BlogContainer>
      <MDXRemote {...source} components={MDXComponents} />
    </BlogContainer>
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
