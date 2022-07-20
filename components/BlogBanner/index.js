import {
  Container,
  Title,
  Content,
  StyledA,
  LeftColumn,
  TagContainer,
  Tag,
  ImageStyled
} from "./index.styles";
import Link from "next/link";
import { useState } from "react";

export const BlogBanner = ({ post }) => {
  const [tags, setTags] = useState(post.tag?.split(", "));
  return (
    <Container>
      <LeftColumn>
        <Title>{post.title}</Title>
        <Content>{post.abstract}</Content>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>

        <Link href={`blog/${post.slug}`}>
          <StyledA>Continuar leyendo</StyledA>
        </Link>
      </LeftColumn>
      <div style={{ width: "50%" }}>
        <ImageStyled
          alt="programming wallpaper"
          src={post.image}
          layout="responsive"
          width="80%"
          height="50%"
          unoptimized
        ></ImageStyled>
      </div>
    </Container>
  );
};
