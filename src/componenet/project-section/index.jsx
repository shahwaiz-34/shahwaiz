/* eslint-disable no-unused-vars */
import React from "react";
import SabHeader from '../Header';
import { motion } from "framer-motion";
import { ShoppingCart, BarChart3, Palette, ExternalLink, Star, Github } from "lucide-react";

import myShop_img from "../../assets/my-shop.png";
import modrenLanging_img from "../../assets/modren-landing.png";
import albirds_img from "../../assets/albirds.png";

const projects = [
  {
    title: "Responsive E-Commerce Site",
    icon: <ShoppingCart size={20} />,
    description: "A high-performance, visually stunning e-commerce storefront optimized for seamless user journeys, rich interactive carousels, and fluid dynamic routing.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "swiper", "react-router-dom", "react-icon"],
    image: albirds_img,
    GitHub: "https://github.com/shahwaiz-34/allbirds",
    LiveDemo: "https://allbirds-seven.vercel.app/",
    featured: true, 
  },
  {
    title: "My Shop",
    icon: <BarChart3 size={20} />,
    description: "A modern retail web application built on clean architecture, features seamless API synchronization, and secure, industry-standard authentication middleware.",
    tags: ["React", "API", "Clerk Auth", "react-router-dom"],
    image: myShop_img,
    GitHub: "https://github.com/shahwaiz-34/my-shop",
    LiveDemo: "https://my-shop-nine-orpin.vercel.app/",
    featured: false,
  },
  {
    title: "Modern Landing Page",
    icon: <Palette size={20} />,
    description: "An ultra-slick, pixel-perfect showcase landing page utilizing next-gen styling frameworks and physics-based animations to drive user engagement.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Lucide React"],
    image: modrenLanging_img,
    GitHub: "https://github.com/shahwaiz-34/modern-landing-2026",
    LiveDemo: "https://modern-landing-2026.vercel.app/",
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      // Dynamic zIndex completely clears layout stacking bugs during state transition
      whileHover={{ y: -8, zIndex: 40 }}
      className="relative bg-[#121212] border border-purple-500/20 rounded-3xl p-6 md:p-7 flex flex-col gap-5 group h-full hover:border-purple-500/50 transition-colors duration-300 z-10 isolate will-change-transform"
    >
    
      {/* Header */}
      <div className="flex justify-between items-center z-20">
        <h3 className="text-white py-1 text-xl font-semibold group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <div className="text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity">
          {project.icon}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center border border-white/5 z-20">
        <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-100 shadow-2xl transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Description Section */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors z-20">
        {project.description}
      </p>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mt-1 z-20">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full text-[11px] bg-purple-500/10 border border-purple-500/20 uppercase tracking-wider text-purple-300 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-auto pt-4 z-20">
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={project.GitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs py-3 rounded-xl cursor-pointer border border-white/10 transition-colors"
        >
          <Github size={14} /> GitHub
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 4px 20px rgba(120, 87, 255, 0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          href={project.LiveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#7857FF] hover:bg-[#6744f5] text-white rounded-full uppercase tracking-wider text-xs py-3 cursor-pointer transition-all font-medium border border-purple-400/20"
        >
          Live Demo <ExternalLink size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <SabHeader upperText={"My Projects"} lowerText={"My Work"}/>
      <section
        id="projects"
        className="px-4 sm:px-6 lg:px-14 pb-24 font-sans relative isolate overflow-hidden"
      >
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay z-0" />

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 layer-fix">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
