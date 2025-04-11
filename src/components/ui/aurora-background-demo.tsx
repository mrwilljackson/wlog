"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { FileText } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pt-8 md:pt-0"
      >
        <div className="relative w-[200px] h-[200px] mb-6 overflow-hidden rounded-full border-2 border-white/20">
          <Image
            src="https://avatars.githubusercontent.com/u/248461?s=400&u=615df31b1afbea570de3ae3fe817e814d90b9cdb&v=4"
            alt="Will Jackson"
            width={200}
            height={200}
            className="object-cover"
            priority
          />
        </div>
        <div className="text-4xl md:text-6xl font-bold dark:text-white text-center">
          Will Jackson
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center w-full">
          human centered designer,<br />developer and social entrepreneur.
        </div>
        <button className="bg-purple-600 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          <a href="https://play.physio">Find out about Playphysio&reg;</a>
        </button>

        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <h3 className="text-xl font-semibold"><a href="https://www.linkedin.com/in/mrwilljackson/">LinkedIn</a></h3>
            </div>
            <p className="text-sm opacity-80"><a href="https://www.linkedin.com/in/mrwilljackson/">Connect with me here</a>, find out what I do and what I&apos;ve done in the past.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-semibold"><a href="https://medium.com/me/stories/public">Medium</a></h3>
            </div>
            <p className="text-sm opacity-80">Thoughts and observations <a href="https://medium.com/me/stories/public">published online</a>.</p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
