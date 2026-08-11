import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import SabHeader from "../Header";

const ContactSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage({
            type: "success",
            text: "Message sent successfully! I'll get back to you soon.",
          });
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          setStatusMessage({
            type: "error",
            text: "Failed to send message. Please try again later.",
          });
          setIsSending(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="ocean-surface relative overflow-hidden min-h-screen flex flex-col justify-between">
      <SabHeader upperText={"Get In Touch"} lowerText={"Contact Me"} />

      <section
        id="contact"
        className="w-full text-white px-4 sm:px-6 lg:px-14 py-8 flex-grow flex flex-col justify-center items-center relative z-10"
      >
        {/* Glowing Background Orbs */}
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -left-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* 1. Contact Info Card */}
            <CardWrapper title="Contact Info">
              <div className="flex flex-col justify-evenly h-full py-4 space-y-6">
                <ContactItem
                  icon={<FaEnvelope />}
                  title="Email"
                  content="shahwaizgoraya10@gmail.com"
                  href="mailto:shahwaizgoraya10@gmail.com"
                />
                <ContactItem
                  icon={<FaPhone />}
                  title="Phone"
                  content="+92 309 9338055"
                  href="tel:+923099338055"
                />
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  content="Punjab, Pakistan"
                />
              </div>
            </CardWrapper>

            {/* 2. Social Links Card */}
            <CardWrapper title="Social Links">
              <div className="flex flex-col justify-evenly h-full py-4 space-y-6">
                <SocialItem
                  icon={<FaGithub />}
                  label="GitHub"
                  link="https://github.com/shahwaiz-34"
                />
                <SocialItem
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  link="https://www.linkedin.com"
                />
                <SocialItem
                  icon={<FaTwitter />}
                  label="Twitter / X"
                  link="https://x.com/GorayaShah12893"
                />
                <SocialItem
                  icon={<FaFacebook />}
                  label="Facebook"
                  link="https://www.facebook.com/share/1ApGfsx8pU/"
                />
              </div>
            </CardWrapper>

            {/* 3. Contact Form Card */}
            <CardWrapper title="Let's Connect">
              <form
                className="flex flex-col justify-between h-full space-y-6"
                ref={formRef}
                onSubmit={sendEmail}
              >
                <div className="space-y-5 flex-grow flex flex-col justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="from_name"
                      type="text"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      required
                      className="w-full bg-white/[0.04] text-gray-200 border border-white/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder-gray-500"
                    />
                    <input
                      name="from_email"
                      type="email"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      required
                      className="w-full bg-white/[0.04] text-gray-200 border border-white/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder-gray-500"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="How can we collaborate?"
                    aria-label="Your Message"
                    required
                    rows={6}
                    className="w-full bg-white/[0.04] text-gray-200 border border-white/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder-gray-500 resize-none flex-grow"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <motion.button
                    whileHover={!isSending ? { scale: 1.01 } : {}}
                    whileTap={!isSending ? { scale: 0.98 } : {}}
                    disabled={isSending}
                    type="submit"
                    className="ocean-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/10 text-base"
                  >
                    {isSending ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-5 h-5 ml-1"
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
                          />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {statusMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`flex items-center gap-2 text-sm p-3.5 rounded-xl border ${
                          statusMessage.type === "success"
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                            : "bg-rose-500/10 border-rose-500/20 text-rose-300"
                        }`}
                      >
                        {statusMessage.type === "success" ? (
                          <FaCheckCircle className="shrink-0 text-lg" />
                        ) : (
                          <FaExclamationCircle className="shrink-0 text-lg" />
                        )}
                        <span>{statusMessage.text}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
      hidden: { y: 25, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    }}
    whileHover={{ y: -6 }}
    className="ocean-card border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col min-h-[650px] lg:min-h-[80vh] transition-all duration-300 relative overflow-hidden bg-white/[0.02] backdrop-blur-md shadow-2xl"
  >
    <div className="relative z-10 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold mb-8 text-white tracking-wide flex items-center gap-2">
        {title}
      </h3>
      <div className="flex-grow flex flex-col justify-between">{children}</div>
    </div>
  </motion.div>
);

const ContactItem = ({ icon, title, content, href }) => {
  const contentWrapper = (
    <div className="flex items-center gap-5 group py-2">
      <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 text-xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
          {title}
        </p>
        <p className="text-base text-gray-200 group-hover:text-cyan-300 transition-colors font-medium">
          {content}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {contentWrapper}
    </a>
  ) : (
    contentWrapper
  );
};

const SocialItem = ({ icon, label, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-5 group cursor-pointer py-2"
  >
    <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 text-xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
      {icon}
    </div>
    <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
      {label}
    </span>
  </a>
);

export default ContactSection;