/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  ArrowUp,
} from "lucide-react";

export default function PortFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[400px] flex items-end justify-center pb-8 font-sans relative">
      <div className="absolute inset-0 transform rotate-180 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <motion.footer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl bg-[#0f0f1a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative 
                   border border-purple-500/20 shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)] m-3"
      >
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, backgroundColor: "#a855f7" }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 right-8 md:right-16 bg-[#1a1a2e] border border-purple-500/50 p-4 rounded-2xl text-white shadow-2xl transition-colors group"
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
        </motion.button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          {/* Column 1: Brand & Bio */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 flex flex-col items-center sm:items-start"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Shahwaiz <span className="text-purple-500">.</span>
              </h2>
              <p className="text-purple-400 font-medium mt-1">
                Front-End Developer
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
              Building the future of the web with precision, passion, and a
              touch of purple.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
              © 2026 • Crafted by Shahwaiz
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">
              Menu
            </h4>
            <nav className="flex flex-col space-y-4">
              <NavLinks text="Project" link="project"/>
              <NavLinks text="Contect" link="contect" />
              <NavLinks text="Tech Stack" link="services" />
              <NavLinks text="About" link="about" />
            </nav>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">
              Resources
            </h4>
            <nav className="flex flex-col space-y-4">
              <NavLink text="GitHub Repos" link="https://github.com/shahwaiz-34?tab=repositories" />
            
            </nav>
          </motion.div>

          {/* Column 4: Contact & Social */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 flex flex-col items-center sm:items-start"
          >
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">
              Get In Touch
            </h4>

            <motion.a
              href="mailto:hello@shahwaiz.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-white/5 border border-white/10 p-3 rounded-2xl w-full max-w-[240px] group hover:bg-purple-500/10 hover:border-purple-500/50 transition-all shadow-xl"
            >
              <div className="bg-purple-500/20 p-2 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <span className="text-gray-300 text-[12px] font-medium">
                shahwaizgoraya10@gmail.com
              </span>
            </motion.a>

           
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

const NavLink = ({ text ,link}) => (
  <motion.a
    target="_blank"
    href={link}
    whileHover={{ x: 6 }}
    className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-center sm:justify-start group"
  >
    <span className="w-0 h-[2px] bg-purple-500 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
    {text}
  </motion.a>
);


const NavLinks = ({ text ,link}) => (
  <motion.a
    href={`#${link}`}
    whileHover={{ x: 6 }}
    className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-center sm:justify-start group"
  >
    <span className="w-0 h-[2px] bg-purple-500 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
    {text}
  </motion.a>
);


const SocialIcon = ({ icon }) => (
  <motion.a
    href="#"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1a1a2e] border border-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all"
  >
    {icon}
  </motion.a>
);
