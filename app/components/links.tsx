"use client";
import React from "react";
import { LinkPreview } from "../ui/link";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[30rem] flex-col px-4 pt-20 pb-20 bg-black ">
      <p className="relative z-10  bg-black text-center text-2xl md:text-2xl py-7  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
        Check my recent project 
        
        <LinkPreview url="https://dev.vp-net.org/" className="font-bold p-5 dark:text-blue-500  text-blue-500">
          - VPNET
        </LinkPreview>{" "}
      </p>
    </div>
  );
}
