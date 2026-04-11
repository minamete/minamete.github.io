import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ language = "javascript", children }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      showLineNumbers
      customStyle={{
        borderRadius: "10px",
        padding: "0.9rem",
        margin: 0,
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}
