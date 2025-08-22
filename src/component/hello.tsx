import { useEffect, useState } from "react";

const fontFamilies = [
  "Bytesized",
  "Major Mono Display",
  "Monoton",
  "Rock 3D",
  "Rubik Puddles",
  "Space Grotesk",
];

const minFontSize = 48;
const maxFontSize = 50;

const helloVariants = [
  "Hello",
  "holle",
  "HELLO",
  "ollhe",
  "hlelo",
  "6le9o",
  "hlllo",
  "h___o",
  "_ell_",
];

interface AnimatedHelloProps {
  isAnimating: boolean;
}

export function AnimatedHello({ isAnimating }: AnimatedHelloProps) {
  const [hello, setHello] = useState("hello");
  const [currentFont, setCurrentFont] = useState(fontFamilies[0]);
  const [currentSize, setCurrentSize] = useState(minFontSize);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      const randomHelloIndex = Math.floor(Math.random() * helloVariants.length);
      setHello(helloVariants[randomHelloIndex]);

      const randomFontIndex = Math.floor(Math.random() * fontFamilies.length);
      setCurrentFont(fontFamilies[randomFontIndex]);

      const randomSize =
        Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) +
        minFontSize;
      setCurrentSize(randomSize);
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div
      className="transition-all duration-300 ease-in-out"
      id="hello-text"
      style={{
        fontFamily: currentFont,
        fontSize: `${currentSize}px`,
      }}
    >
      {hello}
    </div>
  );
}
