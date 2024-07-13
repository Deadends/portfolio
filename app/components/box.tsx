import { describe } from "node:test";
import { HoverEffect } from "../components/card-hover-effect";

const Approach = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Linked - In",
    description:
      "To Keep a track about me or to contact me.",
    link: "https://www.linkedin.com/in/nanthabala013/",
  },
  {
    title: "GitHub <>",
    description:
      "Dive deep into my perspective in Developing.",
    link: "https://github.com/Deadends",
  },
  {
    title: "Gmail 📬",
    description:
      "Drop a mail, To hire me.",
    link: "mailto: nantha.ponmudi@gmail.com",
  },
  {
    title: "Skills 💭",
    description:"React\nNode\nTypeScript\nPython",
    link: "https://buymeacoffee.com/nantha_",
  },
  {
    title: "Buy me a Coffee 🍵",
    description:
      "Get me a Coffee.",
    link: "https://buymeacoffee.com/nantha_"
,
  },
  {
    title: "Deets !",
    description:
      "Im exposed to learning cool Tools, To learn more about my recent projects click on.",
    link: "https://github.com/Deadends",
  },
];

export default Approach ;