import React from "react";
import Navbar from "../nav/index";
import Hero from "../hero/index";
import ProjectCard from "../project-section/index";
import ContactSection from "../contect-section";
import JourneyTimeline from "../journey-section/index";
import PortFooter from "../footer";
import TechStackSection from "../tech-stack";
export default function HomePortfolio() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar Start */}
      <Navbar />
      {/* Hero start */}
      <Hero />
      {/* tech stack start */}
      <TechStackSection/>
      {/* Project Start */}
      <ProjectCard />
      {/* Contect Start */}
      <ContactSection />
      {/* About Start */}
      <JourneyTimeline />
      {/* Footer Start */}
      <PortFooter />
    </main>
  );
}
