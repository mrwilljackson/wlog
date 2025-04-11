"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
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
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 ">
          Human centered designer,<br />developer and social entrepreneur.
        </div>
        <button className="bg-purple-600 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Find out about Playphysio&reg;
        </button>

        <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm opacity-80">Connect with me here, find out what I do and what I've done in the past.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold mb-2">Medium</h3>
            <p className="text-sm opacity-80">Thoughts and observtions published online.</p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
