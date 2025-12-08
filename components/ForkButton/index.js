import { VscRepoForked } from "react-icons/vsc";
import { logEvent } from "../../lib/analytics";
import { Button } from "./index.style";

export const ForkButton = ({ repo,size,color }) => {
  return (
    <Button href={repo + "/fork"} target="_blank" rel="noreferrer">
      <VscRepoForked
        onClick={() => {
          logEvent("Button", "Fork", repo);
        }}
        size={size ? size : 21}
        color={color ? color : "#3b82f6"}
      />
    </Button>
  );
};
