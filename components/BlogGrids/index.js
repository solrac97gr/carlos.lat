import { BlogCard } from "../BlogCard";
import { Container } from "./index.styles";

export const BlogGrids = ({ posts, filter }) => {
  return (
    <Container>
      {filter === "All"
        ? posts.map((post) => {
            return <BlogCard key={post.title} post={post} />;
          })
        : posts
            .filter((post) => {
              return post.tag.split(", ").includes(filter);
            })
            .map((post) => {
              return <BlogCard key={post.title} post={post} />;
            })}
    </Container>
  );
};
