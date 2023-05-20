import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: White;
  padding: 40px;
`;

export const Text = styled.span`
  width: 70%;
  color: #393640;
`;

export const CallToAction = styled(Link)`
  width: 30%;
`;

export const Button = styled.button`
  color: #10cb6e;
  cursor: pointer;
  background-color: white;
  font-weight: 600;
  width: 30%;
  height: 50%;
  margin: auto;
  padding: 8px;
  border: 0px;
  border-radius: 8px;
  border: 2px solid #10cb6e;
  transition: 0.4s;
  &:hover {
    color: #393640;
    background-color: #63f3ab;
    border: 2px solid white;
  }
`;
