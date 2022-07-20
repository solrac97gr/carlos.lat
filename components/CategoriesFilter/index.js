import { Container, Categories, Category, Title } from "./index.style";
export const CategoriesFilter = ({ filter, topics, handleChangeFilter }) => {
  return (
    <Container>
      <Title>Categorías</Title>
      <Categories>
        {topics.map((topic) => (
          <Category
            onClick={() => handleChangeFilter(topic)}
            key={topic}
            isActive={topic === filter}
          >
            {topic}
          </Category>
        ))}
      </Categories>
    </Container>
  );
};
