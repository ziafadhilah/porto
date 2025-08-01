"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Code, Monitor, Smartphone, Database, Palette } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [showPreview, setShowPreview] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skills = [
    { name: "React.js / Next.js", icon: <Code size={20} /> },
    { name: "Vue.js", icon: <Code size={20} /> },
    { name: "Node.js & Express", icon: <Database size={20} /> },
    { name: "Laravel / PHP", icon: <Database size={20} /> },
    { name: "Flutter / React Native", icon: <Smartphone size={20} /> },
    { name: "UI/UX Design", icon: <Palette size={20} /> },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Freelance Projects",
      desc: "Building scalable web & mobile applications with modern frameworks, focusing on UI/UX and API development.",
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Tech Startup",
      desc: "Worked on responsive web apps with React.js, Vue.js, and Tailwind CSS. Improved user experience and performance.",
    },
    {
      year: "2019 - 2021",
      title: "Computer Science Student",
      company: "University",
      desc: "Learned programming fundamentals, software engineering, and web development best practices.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-[#cfeeff] overflow-hidden font-mono py-28">
      {/* Background Glow */}
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl w-full text-center space-y-16 px-6"
      >
        {/* Avatar + Title */}
        <motion.div variants={itemVariants} className="space-y-4">
          <Image
            src="/images/me.jpg"
            alt="Zia Fadhilah"
            width={120}
            height={120}
            className="rounded-full border-4 border-sky-400 shadow-lg mx-auto cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowPreview(true)}
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-sky-400">
            About <span className="text-white">Me</span>
          </h1>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-sky-200 max-w-3xl mx-auto"
        >
          Hi! I'm{" "}
          <span className="text-sky-400 font-semibold">Zia Fadhilah</span>, a
          passionate Web & Mobile Developer who loves{" "}
          <span className="text-white">crafting UI/UX</span> with smooth user
          experiences and{" "}
          <span className="text-white">powerful backend systems</span>.
        </motion.p>

        {/* Skills */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-sky-400 mb-6">🚀 My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className="flex items-center gap-3 p-4 bg-black/40 border border-sky-400/30 rounded-lg text-sky-200 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-2xl font-bold text-sky-400 mb-6">
            📜 Experience
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-sky-400/30 -translate-x-1/2" />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-full md:w-[48%] p-5 bg-black/40 border border-sky-400/30 rounded-xl hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all ${
                    i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <p className="text-sm text-sky-300">{exp.year}</p>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sky-400 text-sm">{exp.company}</p>
                  <p className="text-sky-200 text-sm mt-2">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Avatar Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
              onClick={() => setShowPreview(false)}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/images/me.jpg"
                  alt="Preview Avatar"
                  width={400}
                  height={400}
                  className="rounded-xl border-4 border-sky-400 shadow-2xl"
                />
                <button
                  onClick={() => setShowPreview(false)}
                  className="absolute top-2 right-2 bg-black/50 px-3 py-1 rounded-lg text-sky-400 hover:bg-black/70"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
