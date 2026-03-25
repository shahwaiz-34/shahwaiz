/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  ArrowUpRight, 
  Code2, 
  Palette, 
  Cpu, 
  Menu, 
  X 
} from "lucide-react";
import Shahwaiz_img from '../../assets/shahwaiz.png';

import { Link as ScrollLink } from "react-scroll";

// --- COMPONENTS ---


const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:-translate-y-1"
  >
    <Icon size={20} />
  </a>
);

// --- HERO SECTION ---

export default function Hero (){
  const roles = ["Front End Developer", "Figma to React ","Adobe XD to React", "React Specialist"];
  const [index, setIndex] = useState(0);

  // Auto-rotate roles
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
  
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full ">
        

        <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20`}></div>
      </div>

    
<div className="w-full max-w-[1400px] mx-auto px-3 md:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 overflow-hidden lg:overflow-visible">
  
  {/* LEFT: TEXT CONTENT */}
  <div className="space-y-8 w-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
        Available for work
      </span>
      {/* Changed text size and leading for better filling */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]">
        Hi, I'm <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Shahwaiz
        </span>
      </h1>
    </motion.div>

    {/* Ensure this container takes full width of parent */}
    <div className="h-16 lg:h-20 overflow-hidden w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-500 w-full"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
    >
      I craft responsive, high-performance websites with modern technologies. 
      Blending art with code to build immersive digital experiences.
    </motion.p>

    <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#projects" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all text-center flex items-center justify-center gap-2">
              View Projects <Code2 size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all text-center">
              Contact Me
            </a>
          </div>
  </div>

  {/* RIGHT: IMAGE SLIDER / VISUAL */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    /* Responsive height and centering adjustments */
    className="relative min-h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
  >
    {/* Scaled the image container for larger screens */}
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[3/4] bg-gray-900 rounded-[2rem] border border-white/10 p-2 shadow-indigo-500/20 rotate-3 hover:rotate-0 transition-all duration-500">
      <div className="w-full h-full bg-zinc-800 rounded-[1.5rem] overflow-hidden relative group">
        <img 
          src={Shahwaiz_img} 
          alt="Shahwaiz" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
          <p className="text-white font-bold text-xl">Shahwaiz</p>
          <p className="text-indigo-400 text-sm">Web Developer</p>
        </div>
      </div>

      {/* Floating Badges with responsive positioning */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute -left-6 sm:-left-12 top-10 bg-[#1a1a1a] p-3 sm:p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-20"
      >
        <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
          <Code2 size={24} />
        </div>
        <div>
          <p className="text-[10px] text-gray-400">Experience</p>
          <p className="text-sm sm:text-base text-white font-bold">2+ Years</p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
        className="absolute -right-4 sm:-right-8 bottom-20 bg-[#1a1a1a] p-3 sm:p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-20"
      >
        <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
          <Palette size={24} />
        </div>
        <div>
          <p className="text-[10px] text-gray-400">Focus</p>
          <p className="text-sm sm:text-base text-white font-bold">Modern UI</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</div>
    </section>
  );
};