import styled from "styled-components";

export const Button = styled.a`
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;

  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  &:hover {
    background-color: #e0e0e0;
  }

  @media (min-width: 768px) {
    width: auto;
  }

  margin-top: 1rem;
`;
