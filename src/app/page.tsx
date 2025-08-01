"use client";

import { motion } from "framer-motion";
import Header from "./components/layouts/header";
import AboutPage from "./about";
import SectionDivider from "./components/layouts/divider";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden font-mono"
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ backgroundPosition: ["0% 0%", "10% 10%", "0% 0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />

        {/* Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-green-500/20 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl px-6 text-center space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-wider text-green-400 drop-shadow-lg"
          >
            Hi, I'm <span className="text-white">Zia Fadhilah</span> 🚀
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-green-200 max-w-2xl mx-auto"
          >
            Web & Mobile Developer passionate about elegant UI/UX & powerful
            APIs.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-400 hover:bg-green-500 hover:border-green-500 transition-all"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-400 hover:bg-green-500 hover:border-green-500 transition-all"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-400 hover:bg-green-500 hover:border-green-500 transition-all"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* ABOUT SECTION */}
      <section id="about" className="">
        <AboutPage />
      </section>

      <SectionDivider />

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Portfolio Website", "E-commerce App", "Mobile Dashboard"].map(
            (p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-black/30 border border-green-400/30 rounded-xl backdrop-blur-md hover:border-green-400 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-green-400">{p}</h3>
                <p className="text-sm text-green-200">
                  A brief description about {p}. Built with modern technologies
                  and clean UI.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-4">Contact Me</h2>
        <p className="text-green-200 mb-6">
          Have a project in mind? Let&apos;s work together! 🚀
        </p>
        <a
          href="mailto:zia@example.com"
          className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition"
        >
          Send Email
        </a>
      </section>
    </>
  );
}
