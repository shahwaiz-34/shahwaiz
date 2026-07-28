import React from 'react'
import { motion } from "framer-motion";
export default function SabHeader({upperText,lowerText}) {
  return (
    <header className="w-full px-4 py-20 sm:px-6 lg:px-14">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-[1400px]"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl min-h-[1.2em] font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-cyan-300 leading-tight">
          {upperText}
        </h1>

        <div className="flex items-center gap-4">
          <div className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-cyan-300 to-transparent"></div>
          <p className="text-cyan-300 uppercase tracking-widest text-xs md:text-sm font-bold">
            {lowerText}
          </p>
        </div>
      </motion.div>
    </header>
  )
}
