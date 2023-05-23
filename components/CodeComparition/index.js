import { Container, Separator } from "./index.styles";

import { Header, ConsoleOutput } from "./index.styles";
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
import "prismjs/plugins/command-line/prism-command-line.css";
import "prismjs/plugins/command-line/prism-command-line.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";

export const CodeCustom = ({
  code,
  language,
  route = "~",
  noHeaders = false,
  output = "",
}) => {
  useEffect(() => {
    Prism.highlightAll();

    Prism.plugins.NormalizeWhitespace.setDefaults({
      "remove-trailing": true,
      "remove-indent": true,
      "left-trim": true,
      "right-trim": true,
      "break-lines": 120,
      "remove-initial-line-feed": false,
      "tabs-to-spaces": 4,
      "spaces-to-tabs": 4,
      "remove-empty": true,
    });
  }, []);

  return (
    <div
      style={{
        overflowX: "auto",
        whiteSpace: "no-wrap",
      }}
    >
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
        <code className={`language-${language}`}>{code}</code>
        {output && (
          <ConsoleOutput className={"command-line"}>
            {output.split("\n").map((line, index) => {
              return <small key={index}> $ {line}</small>;
            })}
          </ConsoleOutput>
        )}
      </pre>
    </div>
  );
};

export const CodeComparition = ({ left, rigth,languageL,languageR }) => {
  return (
    <Container>
      <CodeCustom
        styles={{
          width: "50%",
        }}
        code={left}
        language={languageL}
        noHeaders={true}
      />
      <Separator></Separator>
      <CodeCustom
        styles={{
          width: "50%",
        }}
        code={rigth}
        language={languageR}
        noHeaders={true}
      />
    </Container>
  );
};
