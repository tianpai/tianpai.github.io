import "katex/dist/katex.min.css";
// import Latex from "react-latex-next";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  return (
    <a href="https://en.wikipedia.org/wiki/Segmentation_Fault">
      {/* <Latex>$G=(V,E)$</Latex> */}
      <SyntaxHighlighter language="bash" style={dark}>
        Segmentation Fault!
      </SyntaxHighlighter>
    </a>
  );
}
