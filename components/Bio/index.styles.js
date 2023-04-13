import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15%;
  @media (max-width: 768px) {
    padding: 20% 5% 20% 5%;
  }
`;

export const LinkStyled = styled.a`
  color: #63f3ab;
  text-decoration: underline;
  font-size: 17px;
  cursor: pointer;
`;

export const Content = styled.p``;
