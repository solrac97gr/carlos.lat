import { VscCopy } from "react-icons/vsc";
import { Container } from "./index.styles";
export const CopyButton = ({ onClick, size, color }) => {
  return (
    <Container>
      <VscCopy
        onClick={onClick}
        size={size ? size : 21}
        color={color ? color : "#63F3AB"}
      />
    </Container>
  );
};
