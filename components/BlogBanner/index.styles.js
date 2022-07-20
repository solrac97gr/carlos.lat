import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  padding: 5% 10% 5% 10%;
  display: flex;
  flex-direction: row;
  min-height: 300px;
  @media (max-width: 768px) {
    display:none;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.h1``;
export const Content = styled.p``;
export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 42px;
`;
export const Tag = styled.div`
  margin-right: 5px;
  font-size: 13px;
  font-weight: 400;
  padding: 5px;
  border-radius: 3px;
  color: #63f3ab;
  border: 1px solid #63f3ab;
`;
export const StyledA = styled.a`
  color: #63f3ab;
  text-decoration: underline;
  font-size: 21px;
  cursor: pointer;
`;

export const ImageStyled = styled(Image)`
  border-radius: 5px;
`;
