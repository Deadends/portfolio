"use client";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "I Learn,",
    },
    {
      text: "Deploy,",
    },
    {
      text: "Handle Errors,",
    },
    {
      text: "I Develop<>",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (

      <TypewriterEffectSmooth words={words} />
  );
}

export default TypewriterEffectSmoothDemo;