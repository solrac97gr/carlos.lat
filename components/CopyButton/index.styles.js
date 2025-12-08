import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #3b82f6;
  padding: 8px;
  border-radius: 3px;
  height: 42px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;
