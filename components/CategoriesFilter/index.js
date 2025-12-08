import { Container, Categories, Category, Title } from "./index.styles";
import { useLanguage } from "../../lib/LanguageContext";

export const CategoriesFilter = ({ filter, topics, handleChangeFilter }) => {
  const { t } = useLanguage();
  
  return (
    <Container>
      <Title>{t('blog.categories')}</Title>
      <Categories>
        {topics.map((topic) => (
          <Category
            onClick={() => handleChangeFilter(topic)}
            key={topic}
            isActive={topic === filter}
          >
            {topic === "All" ? t('blog.all') : topic}
          </Category>
        ))}
      </Categories>
    </Container>
  );
};
