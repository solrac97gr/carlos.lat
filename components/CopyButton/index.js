import { VscCopy } from "react-icons/vsc";
import { Container } from "./index.styles";
import { initGA, logEvent } from "../../lib/analytics";

export const CopyButton = ({ onClick, size, color }) => {
  
  const handleClick = () => {
    logEvent("Button", "Copy");
    onClick();
  };

  return (
    <Container>
      <VscCopy
        onClick={handleClick}
        size={size ? size : 21}
        color={color ? color : "#63F3AB"}
      />
    </Container>
  );
};
