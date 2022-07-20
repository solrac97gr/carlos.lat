import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Category = styled.p`
  margin-right: 8px;
  font-size: 13px;
  font-weight: 400;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #63f3ab;
  color: #63f3ab;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #63f3ab !important;
      color: black !important;
    `}
`;
