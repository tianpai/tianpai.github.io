import LogoLoop from "./logo-loop";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiVite,
  SiEslint,
  SiPrettier,
  SiLinux,
  SiApple,
  SiNeovim,
  SiGnubash,
  SiC,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  {
    node: <SiC />,
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://postgresql.org",
  },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiEslint />, title: "ESLint", href: "https://eslint.org" },
  { node: <SiPrettier />, title: "Prettier", href: "https://prettier.io" },
  {
    node: <VscVscode />,
    title: "VS Code",
    href: "https://code.visualstudio.com",
  },
  { node: <SiNeovim />, title: "Neovim", href: "https://neovim.io" },
  {
    node: <SiGnubash />,
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
  },
  { node: <SiLinux />, title: "Linux" },
  { node: <SiApple />, title: "macOS" },
];

export default function TechStackLoop() {
  return (
    <div style={{ height: "80px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={40}
        gap={48}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology stack"
      />
    </div>
  );
}
