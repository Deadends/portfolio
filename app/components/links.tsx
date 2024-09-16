"use client";
import React from "react";
import { LinkPreview } from "../ui/link";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[30rem] flex-col px-4 pt-20 pb-20 bg-black ">
  
      <p className="mt-6 text-zinc-400 tracking-wide leading-relaxed text-xl md:text-3xl max-w-3xl mx-auto mb-10 pt-5 pb-5">
       Check my recent project 
        <LinkPreview url="https://dev.vp-net.org/" className="font-bold p-5 text-blue-300">
          - VPNET
        </LinkPreview>{" "}
        
      </p>
     
    </div>
  );
}
