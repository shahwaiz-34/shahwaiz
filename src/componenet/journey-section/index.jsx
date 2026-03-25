import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Globe, Zap } from "lucide-react";

const timelineData = [
  {
    year: "2023",
    title: "The Foundation",
    subtitle: "HTML & CSS Mastery",
    description:
      "I dived into the core of the web, focusing on transforming creative concepts into responsive, pixel-perfect layouts.",
    tags: ["HTML5", "CSS3", "Flexbox"],
    color: "from-blue-500/20",
  },
  {
    year: "2024",
    title: "The Logic",
    subtitle: "JavaScript Evolution",
    description:
      "Mastered ES6+ and asynchronous programming. Built dynamic interfaces that bridged the gap between static design and app logic.",
    tags: ["ES6+", "DOM", "Fetch API"],
    color: "from-purple-500/20",
  },
  {
    year: "2025",
    title: "The Ecosystem",
    subtitle: "Advanced Development",
    description:
      "Scaled my stack with React and Tailwind. Focused on performance, modularity, and professional Git-based collaboration.",
    tags: ["React", "Tailwind", "Framer"],
    hasAction: true,
    color: "from-indigo-500/20",
  },
];

const JourneyTimeline = () => {
  const { scrollYProgress } = useScroll();
  // This moves a background glow based on scroll position
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "40%"]);

  return (

    



    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-13 px-4 sm:px-6  lg:px-14 font-sans text-white overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Centered Content Wrapper */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Header */}
        <header className="mb-12 md:mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="ml-1.5 md:ml-0.5"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-600 leading-[1.1]">
              My Journey
            </h1>

            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-purple-500"></div>
              <p className="text-purple-400 uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                Evolution of a Developer
              </p>
            </div>
          </motion.div>
        </header>

        {/* Timeline Grid */}
        <div className="relative flex flex-col gap-5 lg:flex-row items-stretch justify-center">
          {timelineData.map((item, index) => (
            <React.Fragment key={item.year}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-[#12121a]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 flex-1 flex flex-col justify-between shadow-2xl group transition-all duration-500 hover:border-purple-500/40"
              >
                {/* Subtle Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-[2.5rem]`}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-purple-400 font-mono font-black text-2xl tracking-tighter">
                      {item.year}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {item.hasAction ? <Globe size={22} /> : <Zap size={22} />}
                    </div>
                  </div>

                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    {item.title}
                  </h3>
                  <h4 className="text-3xl font-extrabold mb-4 group-hover:text-purple-200 transition-colors">
                    {item.subtitle}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="relative z-10 flex flex-wrap items-center gap-2 mt-auto">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Connector Arrow (Desktop Only) */}
              {index !== timelineData.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-2 opacity-20">
                  <ChevronRight size={32} className="text-purple-500" strokeWidth={3} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>





  );
};

export default JourneyTimeline;
