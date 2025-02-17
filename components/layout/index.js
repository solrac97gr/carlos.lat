import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { LayoutStyled } from "./index.styles";
import Head from "next/head";
export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      {children}
    </LayoutStyled>
  );
};
