import React from "react";
import { motion } from "framer-motion";
import SubHeader from '../Header/index'
import {
  Bug,
  SearchCode,
  Wrench,
  ShieldCheck,
  MonitorSmartphone,
  PlusCircle,
  Image as ImageIcon,
  LayoutList,
} from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiSketch,
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

  // Data Arrays
  const coreTech = [
    { name: "React JS", icon: <SiReact className="text-[#61DAFB] text-xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-[#F7DF1E] bg-black text-xl" />,
    },
    {
      name: "HTML & CSS",
      icon: <SiHtml5 className="text-[#E34F26] text-xl" />,
    },
    {
      name: "Tailwind CSS ",
      icon: <SiTailwindcss className="text-[#06B6D4] text-xl" />,
    },
    {
      name: "Responsive Web Templates",
      icon: <MonitorSmartphone className="text-[#9C82F5] text-xl" />,
    },
  ];

  const essentialServices = [
    {
      name: "Bug Fixing",
      icon: <SearchCode className="text-[#9C82F5] text-xl" />,
    },
    {
      name: "API Integration",
      icon: <Wrench className="text-[#9C82F5] text-xl" />,
    },
    {
      name: "Website Error Fixing",
      icon: <Bug className="text-[#9C82F5] text-xl" />,
    },
    {
      name: "Protected Routes",
      icon: <ShieldCheck className="text-[#9C82F5] text-xl" />,
    },
    {
      name: "Responsive React UI Web Fixation",
      icon: <MonitorSmartphone className="text-[#9C82F5] text-xl" />,
    },
    {
      name: "New Features in existing site",
      icon: <PlusCircle className="text-[#9C82F5] text-xl" />,
    },
  ];

  const conversions = [
    {
      name: "Figma to React",
      icon: <SiFigma className="text-[#F24E1E] text-xl" />,
    },
    {
      name: "Adobe XD to React",
      icon: <SiAdobexd className="text-[#FF61F6] text-xl" />,
    },
    {
      name: "PSD to React",
      icon: <SiAdobephotoshop className="text-[#31A8FF] text-xl" />,
    },
    {
      name: "Sketch to React",
      icon: <SiSketch className="text-[#F7B500] text-xl" />,
    },
    {
      name: "JPEG to React",
      icon: <ImageIcon className="text-[#48CFA4] text-xl" />,
    },
    { name: "Etc.", icon: <LayoutList className="text-[#9C82F5] text-xl" /> },
  ];

  return (
     
    <div>

     <SubHeader upperText={"Expertise"} lowerText={"Tech Stack & Services"}/>
    <section
      id="services"
      className="min-h-screen w-full flex flex-col justify-center items-center  px-4 sm:px-6 lg:px-14 font-sans text-white relative overflow-hidden"
    >
      {/* Background Noise/Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Centered Wrapper */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Header Section */}
        {/* <header className="mb-12 md:mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-600 leading-[1.1]">
              Expertise
            </h1>

            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-purple-500"></div>
              <p className="text-purple-400 uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                Tech Stack & Services
              </p>
            </div>
          </motion.div>
        </header> */}

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Core Technologies */}
          <motion.div
            variants={cardVariants}
            className="group bg-[#161423] border border-[#31255A] hover:border-purple-500/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(120,87,255,0.3)]"
          >
            <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">
              Core Technologies
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-10 flex-grow">
              {coreTech.map((tech, index) => (
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
              <span className="bg-[#7857FF] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold">
                React JS
              </span>
              <span className="bg-[#262335] text-gray-400 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold">
                Frontend
              </span>
            </div>
          </motion.div>

          {/* Card 2: Services */}
          <motion.div
            variants={cardVariants}
            className="group bg-[#161423] border border-[#31255A] hover:border-purple-500/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(120,87,255,0.3)]"
          >
            <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">
              Essential Services
            </h3>
            <div className="flex flex-col gap-5 mb-10 flex-grow">
              {essentialServices.map((service, index) => (
                <div key={index} className="flex items-center gap-4 group/item">
                  <div className="p-2 rounded-xl bg-[#262335] text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-base font-medium text-gray-300">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-auto flex-wrap">
              <span className="bg-[#7857FF] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold">
                Debugging
              </span>
              <span className="bg-[#262335] text-gray-400 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold">
                API Integration
              </span>
            </div>
          </motion.div>

          {/* Card 3: Conversions */}
          <motion.div
            variants={cardVariants}
            className="group bg-[#161423] border border-[#31255A] hover:border-purple-500/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(120,87,255,0.3)] md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-purple-300 transition-colors">
              Design to React
            </h3>
            <div className="flex flex-col gap-5 mb-10 flex-grow">
              {conversions.map((conversion, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-[#262335] flex items-center justify-center w-10 h-10 text-purple-400">
                    {conversion.icon}
                  </div>
                  <span className="text-base font-medium text-gray-300">
                    {conversion.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-auto flex-wrap">
              <span className="bg-[#7857FF] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold">
                Pixel-Perfect
              </span>
              <span className="bg-[#262335] text-gray-400 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold">
                Responsive
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
