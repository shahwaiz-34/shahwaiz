import React from "react";
import { motion } from "framer-motion";
import SubHeader from '../Header/index'
import {
  Bug,
  Wrench,
  MonitorSmartphone,
  PlusCircle,
  Server,
  Database,
  Lock,
  Compass
} from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiClerk
} from "react-icons/si";

const TechStackSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 3-Card Merged Data Arrays
  const frontendStack = [
    { name: "React.js Ecosystem", icon: <SiReact className="text-[#61DAFB] text-xl" /> },
    { name: "JavaScript / ES6+", icon: <SiJavascript className="text-[#F7DF1E] bg-black text-xl" /> },
    { name: "Tailwind CSS Styling", icon: <SiTailwindcss className="text-[#06B6D4] text-xl" /> },
    { name: "Figma / Design to Code", icon: <SiFigma className="text-[#F24E1E] text-xl" /> },
    { name: "Responsive UI Architecture", icon: <MonitorSmartphone className="text-[#9C82F5] text-xl" /> },
  ];

  const backendStack = [
    { name: "Next.js (App Router)", icon: <SiNextdotjs className="text-white text-xl" /> },
    { name: "Node.js Runtime", icon: <SiNodedotjs className="text-[#339933] text-xl" /> },
    { name: "Express.js Framework", icon: <SiExpress className="text-white text-xl" /> },
    { name: "MongoDB Database", icon: <SiMongodb className="text-[#47A248] text-xl" /> },
    { name: "Clerk Authentication", icon: <SiClerk className="text-[#6C47FF] text-xl" /> },
  ];

  const clientServices = [
    { name: "Full-Stack Web Apps", icon: <Server className="text-[#9C82F5] text-xl" /> },
    { name: "RESTful API Integration", icon: <Wrench className="text-[#9C82F5] text-xl" /> },
    { name: "Secure Protected Routes", icon: <Lock className="text-[#9C82F5] text-xl" /> },
    { name: "Database Architecture", icon: <Database className="text-[#9C82F5] text-xl" /> },
    { name: "Complex Debugging & Fixes", icon: <Bug className="text-[#9C82F5] text-xl" /> },
    { name: "Feature Scaling & Updates", icon: <PlusCircle className="text-[#9C82F5] text-xl" /> },
  ];

  return (
    <div>
      <SubHeader upperText={"Expertise"} lowerText={"Tech Stack & Services"} />
      <section
        id="services"
        className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-14 font-sans text-white relative overflow-hidden py-12"
      >
        {/* Background Noise/Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        {/* Centered Wrapper */}
        <div className="max-w-[1400px] w-full mx-auto relative z-10">
          
          {/* 3-Card Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Card 1: Frontend & Design */}
            <motion.div
              variants={cardVariants}
              className="group bg-[#161423] border border-[#31255A] hover:border-purple-500/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(120,87,255,0.3)]"
            >
              <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">
                Frontend & Design
              </h3>

              <div className="grid grid-cols-1 gap-3 mb-10 flex-grow">
                {frontendStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#1c1a2e]/50 border border-transparent hover:bg-[#201d36] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-[#262335] text-purple-400 group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 mt-auto flex-wrap">
                <span className="bg-[#7857FF] text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Client Side
                </span>
                <span className="bg-[#262335] text-gray-400 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Pixel-Perfect
                </span>
              </div>
            </motion.div>

            {/* Card 2: Backend & Systems */}
            <motion.div
              variants={cardVariants}
              className="group bg-[#161423] border border-[#31255A] hover:border-purple-500/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(120,87,255,0.3)]"
            >
              <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">
                Backend & Auth
              </h3>

              <div className="grid grid-cols-1 gap-3 mb-10 flex-grow">
                {backendStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#1c1a2e]/50 border border-transparent hover:bg-[#201d36] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-[#262335] text-purple-400 group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 mt-auto flex-wrap">
                <span className="bg-[#7857FF] text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Server Side
                </span>
                <span className="bg-[#262335] text-gray-400 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  MERN Stack
                </span>
              </div>
            </motion.div>

            {/* Card 3: Engineering Services */}
            <motion.div
              variants={cardVariants}
              className="group bg-[#161423] border border-[#31255A] hover:border-purple-500/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(120,87,255,0.3)]"
            >
              <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">
                Expert Services
              </h3>
              <div className="grid grid-cols-1 gap-3 mb-10 flex-grow">
                {clientServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#1c1a2e]/50 border border-transparent hover:bg-[#201d36] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-[#262335] text-purple-400 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-300">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-auto flex-wrap">
                <span className="bg-[#7857FF] text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Solutions
                </span>
                <span className="bg-[#262335] text-gray-400 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Optimization
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechStackSection;