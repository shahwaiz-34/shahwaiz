import React from "react";
import Navbar from "../nav/index";
import Hero from "../hero/index";
import ProjectCard from "../project-section/index";
import ContactSection from "../contect-section";

import PortFooter from "../footer";
import TechStackSection from "../tech-stack";
export default function HomePortfolio() {
  return (
    <main className="ocean-surface min-h-screen text-white font-sans selection:bg-cyan-400 selection:text-slate-950">
      {/* Navbar Start */}
      <Navbar />
      {/* Hero start */}
      <Hero />
      {/* Project Start */}
      <ProjectCard />
      {/* tech stack start */}
      <TechStackSection/>
      {/* Contect Start */}
      <ContactSection />
      {/* Footer Start */}
      <PortFooter />
    </main>
  );
}
