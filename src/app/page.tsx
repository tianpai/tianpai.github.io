import "katex/dist/katex.min.css";
// import Latex from "react-latex-next";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home() {
  let seg = (
    <a href="https://en.wikipedia.org/wiki/Segmentation_Fault">
      <SyntaxHighlighter language="bash" style={dark}>
        Segmentation Fault!
      </SyntaxHighlighter>
    </a>
  );

  let fein = (
    <a href="https://www.youtube.com/watch?v=B9synWjqBn8">
      <SyntaxHighlighter language="text" style={dark}>
        FE!N
      </SyntaxHighlighter>
    </a>
  );
  const home = [seg, fein];
  let random = randomIntFromInterval(0, home.length - 1);
  return home[random];
}
