"use client";
import React from "react";
import { LinkPreview } from "../ui/link";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[30rem] flex-col px-4 pt-0 pb-22 bg-black ">
      <p className="relative z-10  bg-black text-center text-2xl md:text-2xl py-7  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
        Hover over my recent projects</p>

        <p className=" pt-7 relative z-10  bg-black text-center text-1xl md:text-1xl py-4  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
        Full Scale Industrial Project  
        <LinkPreview url="https://dev.vp-net.org/" className="font-bold p-2 dark:text-blue-500  text-blue-500">
          - VPnet
        </LinkPreview>{" "}</p>
        <p className="relative z-10  bg-black text-center text-1xl md:text-1xl py-4  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
        E-wallet Webpage  
        <LinkPreview url="https://miracle-pages-373873.framer.app/" className="font-bold p-2 dark:text-blue-500  text-blue-500 ">
          - vault X
        </LinkPreview>{" "}
      </p>
    </div>
    
  );
}
