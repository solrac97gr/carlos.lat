import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  background-color: #011627;
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Separator = styled.div`
  width: 1px;
  background-color: #3b82f6;
  padding: 1px;

`;