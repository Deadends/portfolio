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
    title: "Medium Blogs 💭",
    description:"I like to document my research work, do give it a read.",
    link: "https://nantha-ponmudi.medium.com/",
  },
  {
    title: "Buy me a Coffee 🍵",
    description:
      "Get me a Coffee.",
    link: "https://buymeacoffee.com/nantha_"
,
  },
  {
    title: "Connect !",
    description:
      "Hop on a real quick call with me.",
    link: "https://cal.com/nantha-bala-bposrr/10min",
  },
];

export default Approach ;
