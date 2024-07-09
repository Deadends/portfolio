"use client";
import React from "react";
import { BackgroundBeams } from "../app/components/background-beams";
import Approach from "./components/box";
import TypewriterEffectSmoothDemo from "./components/typo";

var year = new Date().getFullYear()  

export default function BackgroundBeamsDemo() {

  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10  text-7xl md:text-8xl lg:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Nantha..
          </h1>
            <div>
              <TypewriterEffectSmoothDemo />
              </div>
        </div>
        
        <BackgroundBeams />
      </div>
      <div  className="relative z-10   text-center text-2xl md:text-2xl py-7 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
        <h1>About</h1>
      </div>
      <div>
      <Approach />
      
      </div>
      
      <footer className=" pb-7 pt-7 relative z-10 text-sm md:text-1xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
      
        Copyrights © {year}
      </footer>
    </>
  );
}

