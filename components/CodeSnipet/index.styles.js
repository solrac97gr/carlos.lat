import styled from "styled-components";
import { CopyButton } from "../CopyButton";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Route = styled.small`
`;

export const ConsoleOutput = styled.pre`
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  margin-left: -3rem;
`;
export const CopyButtonSticky = styled(CopyButton)`
`;