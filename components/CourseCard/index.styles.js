import Image from "next/image";
import styled from "styled-components";

export const ImageStyled = styled(Image)`
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Card = styled.a`
  background-color: #2d2e32 !important;
  margin: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #63f3ab;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  min-height: 360px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #63f3ab;
    border-color: #63f3ab;
    box-shadow: 1px 1px 1px 1px;
    transform: scale(1.03);
  }
  cursor: pointer;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    transition: none;
    &:hover {
      transform: none;
      color: inherit;
      box-shadow: none;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  padding-top: 0rem;
`;

export const Title = styled.h3`
  margin-bottom:0.5rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.p`
  margin-right: 5px;
  fontsize: 13px;
  font-weight: 400;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #63f3ab;
  color: #63f3ab;
`;

export const Date = styled.small`
  color: #95989f;
`;
