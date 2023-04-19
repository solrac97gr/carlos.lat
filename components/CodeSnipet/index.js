import { Header,ConsoleOutput } from "./index.styles";
import { CopyButton } from "../CopyButton";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-docker.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-toml.js";
import "prismjs/components/prism-rust.js";

export const CodeSnippet = ({
  code,
  language,
  route = "~",
  noHeaders = false,
  output = "",
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
      {output && (
        <ConsoleOutput>
          <small>{output}</small>
        </ConsoleOutput>
      )}
    </pre>
  );
};
