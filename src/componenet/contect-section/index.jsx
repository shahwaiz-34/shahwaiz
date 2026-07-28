import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SabHeader from "../Header";

const ContactSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("email sent successfuly");
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          alert("failed to send ");
          console.log(error);
          setIsSending(false);
        },
      );
  };

  // Staggered animation for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (

<div className="ocean-surface">

    <SabHeader upperText={"Get In Touch"} lowerText={"Contact Me"} />
  
    <section
      id="contact"
      className="min-h-screen text-white px-4 sm:px-6 lg:px-14 pb-24 flex flex-col justify-center items-center relative isolate overflow-hidden"
    >
      <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* 1. Contact Info Card */}
          <CardWrapper title="Contact Info">
            <div className="space-y-8">
              <ContactItem
                icon={<FaEnvelope />}
                title="Email"
                content="shahwaizgoraya10@gmail.com"
              />
              <ContactItem
                icon={<FaPhone />}
                title="Phone"
                content="+923099338055"
              />
              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                content="pakistan, punjab"
              />
            </div>
          </CardWrapper>

          {/* 2. Social Links Card */}
          <CardWrapper title="Social Links">
            <div className="space-y-8">
              <SocialItem
                icon={<FaGithub />}
                label="GitHub"
                link="https://github.com/shahwaiz-34"
              />
              <SocialItem
                icon={<FaTwitter />}
                label="Twitter"
                link="https://x.com/GorayaShah12893"
              />
              <SocialItem
                icon={<FaFacebook />}
                label="Facebook"
                link="https://www.facebook.com/share/1ApGfsx8pU/"
              />
            </div>
          </CardWrapper>

          <CardWrapper title="Contact Form">
            <form className="space-y-3" ref={formRef} onSubmit={sendEmail}>
              {/* Responsive grid: stacks on mobile, side-by-side on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Name"
                  aria-label="Your Name"
                  required
                  className="w-full bg-white/5 text-gray-200 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20 transition-all placeholder-gray-500"
                />
                <input
                  name="from_email"
                  type="email"
                  placeholder="Email"
                  aria-label="Your Email"
                  required
                  className="w-full bg-white/5 text-gray-200 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20 transition-all placeholder-gray-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                required
                rows={4}
                className="w-full bg-white/5 text-gray-200 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20 transition-all placeholder-gray-500 resize-none"
              />

              <motion.button
                // Only scale if the form is NOT currently sending
                whileHover={!isSending ? { scale: 1.02 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                disabled={isSending}
                type="submit"
                className="ocean-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition-all duration-200"
              >
                {isSending ? (
                  <>
                    {/* Loading Spinner */}
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    {/* Send Icon */}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </CardWrapper>
        </motion.div>
      </div>
    </section>

  </div>
  );
};

// --- Reusable Sub-Components ---

const CardWrapper = ({ title, children }) => (
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    }}
    whileHover={{ y: -5 }}
    className="ocean-card border rounded-3xl p-6 flex flex-col h-full transition-all duration-300 relative overflow-hidden"
  >
    {/* Content */}
    <div className="relative z-10 flex-grow">
      <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
      {children}
    </div>

    {/* Footer Pills (Visual Decoration) */}
    {/* <div className="mt-8 pt-4 border-t border-gray-800/50 flex gap-2 text-[10px] font-medium text-gray-400">
      <span className="bg-[#6366f1] text-white px-3 py-1 rounded-full">React</span>
      <span className="bg-[#1e1e2d] px-3 py-1 rounded-full border border-gray-700">Tailwind CSS</span>
      <span className="bg-[#1e1e2d] px-3 py-1 rounded-full border border-gray-700">Framer Motion</span> */}
    {/* </div> */}
  </motion.div>
);

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#050b1e] transition-colors duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
        {title}
      </p>
      <p className="text-sm text-gray-200">{content}</p>
    </div>
  </div>
);

const SocialItem = ({ icon, label, link }) => (
  <a
    href={link}
    target="_blank"
    className="flex items-center gap-4 group cursor-pointer"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-300 group-hover:text-[#050b1e] transition-colors duration-300">
      {icon}
    </div>
    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
      {label}
    </span>
  </a>
);

export default ContactSection;
