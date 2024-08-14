"use client";
import React from "react";
import { LinkPreview } from "../ui/link";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4 pb-20 ">
  
      <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-xl md:text-3xl max-w-3xl mx-auto mb-10 pb-5">
       Cheky my recent project <br/>
        <LinkPreview url="https://dev.vp-net.org/" className="font-bold ">
          - VPNET
        </LinkPreview>{" "}
        
      </p>
     
    </div>
  );
}
