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
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 -z-20"
          animate={{ backgroundPosition: ["0% 0%", "10% 10%", "0% 0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/50 -z-20" />

        {/* Efek Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-sky-400/20 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 🌌 Efek Galaksi */}
        <div className="absolute inset-0 -z-10">
          {/* Bintang */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white/80"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
              animate={{ opacity: [0, 1, 0], scale: [1, 1.3, 1] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Shooting Star */}
          <motion.div
            className="absolute w-32 h-[2px] bg-gradient-to-r from-white to-transparent rounded-full"
            initial={{ x: "-10%", y: "20%", opacity: 0 }}
            animate={{ x: "110%", opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Konten */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl px-6 text-center space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-wider text-sky-400 drop-shadow-lg"
          >
            Hi, I'm <span className="text-white">Zia Fadhilah</span> 🚀
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-sky-200 max-w-2xl mx-auto"
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
              className="px-6 py-3 rounded-xl bg-sky-500/20 border border-sky-400 hover:bg-sky-500 hover:border-sky-500 transition-all"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-sky-500/20 border border-sky-400 hover:bg-sky-500 hover:border-sky-500 transition-all"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-sky-500/20 border border-sky-400 hover:bg-sky-500 hover:border-sky-500 transition-all"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Section lain */}
      <section id="about" className="">
        <AboutPage />
      </section>

      <SectionDivider />
    </>
  );
}
