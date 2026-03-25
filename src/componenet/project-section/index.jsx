/* eslint-disable no-unused-vars */
import React from "react";
import SabHeader from '../Header'
import { motion } from "framer-motion";
import { ShoppingCart, BarChart3, Palette, ArrowRight } from "lucide-react";

import { ExternalLink, Star } from "lucide-react";

import { Github } from "lucide-react"; // Assuming Lucide for icons

import myShop_img from "../../assets/my-shop.png";
import modrenLanging_img from "../../assets/modren-landing.png";
import albirds_img from "../../assets/albirds.png";
const projects = [
  {
    title: "Responsive E-Commerce Site",
    icon: <ShoppingCart size={20} />,
    tags: ["React", "Tailwind CSS", "Framer Motion","swiper","react-router-dom","react-icon"],
    image: albirds_img,
    GitHub: "https://github.com/shahwaiz-34/allbirds",
    LiveDemo: "https://allbirds-seven.vercel.app/",
  },
  {
    title: "My Shop",
    icon: <BarChart3 size={20} />,
    tags: ["React", "API", "Clerk Auth","react-router-dom"],
    image: myShop_img,
    GitHub: "https://github.com/shahwaiz-34/my-shop",
    LiveDemo: "https://my-shop-nine-orpin.vercel.app/",
  },
  {
    title: "Modern Landing Page",
    icon: <Palette size={20} />,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Lucide React"],
    image: modrenLanging_img,
    GitHub: "https://github.com/shahwaiz-34/modern-landing-2026",
    LiveDemo: "https://modern-landing-2026.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  return (


    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  /* UPDATED: p-6 to p-7 for a slightly more premium "breathable" feel on desktop */
  className="relative bg-[#121212] border border-purple-500/20 rounded-3xl p-6 md:p-7 flex flex-col gap-5 group h-full hover:border-purple-500/50 transition-colors duration-300"
>
  {/* Featured Badge (Conditional) */}
  {project.featured && (
    <div className="absolute -top-3 -right-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10 border border-white/20">
      <Star size={10} fill="currentColor" /> FEATURED
    </div>
  )}

  {/* Header */}
  <div className="flex justify-between items-center">
    <h3 className="text-white py-2 text-xl font-semibold group-hover:text-purple-400 transition-colors">
      {project.title}
    </h3>
    <div className="text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity">
      {project.icon}
    </div>
  </div>

  {/* Image Container */}
  {/* REMOVED: m-1 from the image and replaced with clean rounded-xl handling */}
  <div className="relative aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
    <div className="absolute py-2 inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
    <img
      src={project.image}
      alt={project.title}
      /* FIXED: Removed m-1 to allow image to sit flush with its container for a cleaner look */
      className="w-full h-full object-cover scale-105 shadow-2xl transition-all duration-500 group-hover:scale-110"
    />
  </div>

  {/* Tags Section */}
  {/* UPDATED: gap-2 is fine, but ensure it doesn't touch the image container above */}
  <div className="flex flex-wrap gap-2 mt-1">
    {project.tags.map((tag) => (
      <span
        key={tag}
        className="px-4 py-2 rounded-full text-[12px] bg-purple-500/10 border border-purple-500/20 uppercase tracking-wider text-purple-300 transition-all duration-300"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* Action Buttons */}
  {/* UPDATED: pt-4 provides a clearer separation from the tags/content above */}
  <div className="grid grid-cols-2 gap-3 mt-auto pt-4">
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={project.GitHub}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs py-3 rounded-xl cursor-pointer border border-white/10 transition-colors"
    >
      <Github size={14} /> GitHub
    </motion.a>

    <motion.a
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(79, 70, 229, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      href={project.LiveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-[#7857FF] text-white rounded-full uppercase tracking-wider text-xs py-3 cursor-pointer transition-all font-medium"
    >
      Live Demo <ExternalLink size={14} />
    </motion.a>
  </div>
</motion.div>


  );
};

export default function ProjectsSection() {
  return (
    <div>
      <SabHeader upperText={"My Projects"} lowerText={"My Work"}/>
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-6  lg:px-14 font-sans relative overflow-hidden"
    >
      {/* 1. Base Gradient Glow (Bottom Left) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* 2. Secondary Glow (Right Side) - Example placeholder */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        

        {/* RESPONSIVE GRID: 1 col mobile, 2 cols tablet (md), 3 cols desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
