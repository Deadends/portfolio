"use client"
import { HoverEffect } from "../components/card-hover-effect";


const Approach = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-8 pt-8 pb-8 bg-black">
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
    title: "I like motion designs 📬",
    description:
      "Click here to check my motion designs.",
    link: "https://miracle-pages-373873.framer.app/",
  },
  {
    title: "Skills 💭",
    description:"Next\nFramer\nFigma\nNode\nTypeScript\nAdobe Illustrator",
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
    title: "Projects !",
    description:
      "I'm exposed to learning cool Tools, To explore my UI/UX projects click me.",
    link: "https://www.figma.com/@nantha2",
  },
];

export default Approach ;