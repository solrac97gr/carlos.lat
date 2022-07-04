import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { LayoutStyled } from "./index.styles";
export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      {children}
      <Footer />
    </LayoutStyled>
  );
};
