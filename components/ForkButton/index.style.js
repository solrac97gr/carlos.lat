import styled from "styled-components";

export const Button = styled.a`
  border: 2px solid #63f3ab;
  padding: 8px;
  border-radius: 3px;
  height: 42px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;