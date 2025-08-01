"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./components/layouts/header";

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
      <div className="pt-20 md:pt-15">
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden font-mono">
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

          {/* Glowing Orb */}
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
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold tracking-wider text-green-400 drop-shadow-lg"
            >
              Hi, I'm <span className="text-white">Zia Fadhilah</span> 🚀
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-green-200 max-w-2xl mx-auto"
            >
              Web & Mobile Developer with passion for crafting elegant UI/UX and
              powerful API systems. Welcome to my digital universe!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mt-4"
            >
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-400 text-white hover:bg-green-500 hover:border-green-500 transition-all"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-400 text-white hover:bg-green-500 hover:border-green-500 transition-all"
              >
                My Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-400 text-white hover:bg-green-500 hover:border-green-500 transition-all"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Cards Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              {[
                {
                  title: "⚡ About Me",
                  desc: "Learn more about my journey as a developer and my passion for technology.",
                  link: "/about",
                },
                {
                  title: "🚀 Skills",
                  desc: "Explore my expertise in modern frameworks, backend development, and UI design.",
                  link: "/skills",
                },
                {
                  title: "📂 Projects",
                  desc: "Check out my portfolio of web & mobile apps with clean design and solid backend.",
                  link: "/projects",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-black/30 border border-green-400/30 rounded-xl backdrop-blur-md hover:border-green-400 transition-all cursor-pointer text-left"
                >
                  <h3 className="text-xl font-bold mb-2 text-green-400">
                    {card.title}
                  </h3>
                  <p className="text-sm text-green-200 mb-4">{card.desc}</p>
                  <Link
                    href={card.link}
                    className="text-green-300 text-sm hover:underline"
                  >
                    → Explore
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
