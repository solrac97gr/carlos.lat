import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10%;
  @media (max-width: 768px) {
    padding: 0;
    padding-top: 5rem;
  }
`;
