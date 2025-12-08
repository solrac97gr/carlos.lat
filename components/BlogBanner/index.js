import {
  Container,
  Title,
  Content,
  StyledA,
  LeftColumn,
  TagContainer,
  Tag,
  ImageStyled,
  ImageWrapper
} from "./index.styles";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";

export const BlogBanner = ({ post }) => {
  const { t } = useLanguage();
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
          <StyledA>{t('blog.continueReading')}</StyledA>
        </Link>
      </LeftColumn>
      <ImageWrapper>
        <ImageStyled
          alt="programming wallpaper"
          src={post.image}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 600px"
          style={{ width: '100%', height: 'auto' }}
          unoptimized
        />
      </ImageWrapper>
    </Container>
  );
};
