import { Header, ConsoleOutput, CopyButtonSticky,Route } from "./index.styles";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-makefile.js";
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
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";

export const CodeSnippet = ({
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
              <Route>{route}</Route>
              <CopyButtonSticky
                onClick={() => {
                  navigator.clipboard.writeText(code);
                }}
              ></CopyButtonSticky>
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
