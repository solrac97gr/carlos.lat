import Link from "next/link";
import { Card, Content, Tag, Tags, Title, Date, ImageStyled } from "./index.styles";

export const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} key={post.title + post.date}>
      <Card>
        <ImageStyled
          src={post.image}
          alt="go-wallpaper"
          width="500px"
          height="250px"
          unoptimized
        ></ImageStyled>
        <Content>
          <Title>{post.title}</Title>
          <Tags>
            {post.tag?.split(", ").map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </Tags>
          <Date>{post.date}</Date>
        </Content>
      </Card>
    </Link>
  );
};
