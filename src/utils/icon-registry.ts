import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBun,
  SiMongodb,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const iconRegistry = {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBun,
  SiMongodb,
  SiTailwindcss,
  SiVite,
} as const;

export type IconName = keyof typeof iconRegistry;
