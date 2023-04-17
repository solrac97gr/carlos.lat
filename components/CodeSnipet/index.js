import { Header } from "./index.styles";
import { CopyButton } from "../CopyButton";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-go.js";

export const CodeSnipet = ({
  code,
  language,
  route = "~/projects",
  noHeaders = false,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={`language-${language}`}>
      {!noHeaders && (
        <Header>
          <small>{route}</small>
          <CopyButton
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
          ></CopyButton>
        </Header>
      )}

      <code
        className={`language-${language}`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {code}
      </code>
    </pre>
  );
};
