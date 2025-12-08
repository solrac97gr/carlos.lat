import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 0 0 4rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 0 5rem;
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 0 6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0 3rem;
    gap: 1.5rem;
  }
`;
