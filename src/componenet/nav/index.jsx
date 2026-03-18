/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link as ScrollLink } from "react-scroll";
import {
  Facebook,
  Github,
  Twitter,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

// Helper component for Social Icons
const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-indigo-500 transition-colors"
  >
    <Icon size={20} />
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Projects", "Contact", "About", "Services"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between scroll-smooth ">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          SHAHWAIZ<span className="text-indigo-500">.</span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
        
          {navLinks.map((link) => (
            <motion.div key={link}>
              <ScrollLink
                to={link.toLowerCase()} //
                smooth={true}
                duration={800} // This makes it "Not Fast"
                offset={-80} // Prevents Navbar from covering the title
                spy={true}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4 border-r border-white/10 pr-6">
            <SocialIcon Icon={Facebook} href={'https://www.facebook.com/share/1ApGfsx8pU/'} />
            <SocialIcon Icon={Twitter} href="https://x.com/GorayaShah12893" />
            <SocialIcon Icon={Github} href="https://github.com/shahwaiz-34/modern-landing-2026" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-500 hover:text-white transition-colors"
          >
            <a href="#projects">My Work</a>

            <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white hover:text-indigo-500 scroll-smooth"
                >
                  {link}
                </a>
              ))}
              <div className="flex gap-6 pt-4 border-t border-white/10">
                <SocialIcon
                  Icon={Facebook}
                  href='https://www.facebook.com/share/1ApGfsx8pU/'
                />
                <SocialIcon Icon={Twitter} href="https://x.com/GorayaShah12893" />
                <SocialIcon Icon={Github} href="https://github.com/shahwaiz-34/modern-landing-2026" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
