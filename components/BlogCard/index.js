import Link from "next/link";
import { Card, Content, Tag, Tags, Title, Date, ImageStyled, ReadingTime } from "./index.styles";

export const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} key={post.title + post.date}>
      <Card>
        <ImageStyled
          src={post.image}
          alt="go-wallpaper"
          width={500}
          height={250}
          style={{ width: '100%', height: 'auto' }}
          unoptimized
        ></ImageStyled>
        <Content>
          <Title>{post.title}</Title>
          <Tags>
            {post.tag?.split(", ").map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </Tags>
          <Date>
            {post.date}
            {post.readingTime && (
              <ReadingTime> • {post.readingTime} min read</ReadingTime>
            )}
          </Date>
        </Content>
      </Card>
    </Link>
  );
};
