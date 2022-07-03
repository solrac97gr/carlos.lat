import { Navbar } from "../Navbar";
import { LayoutStyled } from "./index.styles";
export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      {children}
    </LayoutStyled>
  );
};
