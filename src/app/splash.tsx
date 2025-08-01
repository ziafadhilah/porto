"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  top: number;
  left: number;
  x: number;
  y: number;
  duration: number;
};

export default function SplashScreen() {
  const controls = useAnimation();
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const fullText = "> Initializing hyperspace sequence...";

  // Animasi astronaut
  useEffect(() => {
    controls.start({
      y: [0, -12, 0],
      rotate: [0, 1.5, -1.5, 0],
      transition: {
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      },
    });
  }, [controls]);

  // Efek typing
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Buat partikel hanya di client
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 10 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
      duration: 4 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden font-mono"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Nebula Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-800 opacity-20 blur-3xl rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Partikel */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50 blur-sm"
          style={{ top: `${p.top}%`, left: `${p.left}%` }}
          animate={{ x: [0, p.x], y: [0, p.y] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Logo Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-green-400 tracking-widest glitch select-none mb-4"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        ZIA SPACE
      </motion.h1>

      {/* Typing Text */}
      <motion.pre
        className="text-sm md:text-lg text-green-300 max-w-md whitespace-pre-wrap leading-relaxed tracking-wide mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {typedText}
      </motion.pre>

      {/* Progress Bar */}
      <motion.div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-6">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-300"
          style={{ width: `${progress}%` }}
        />
      </motion.div>

      {/* Astronaut */}
      <motion.div animate={controls}>
        <img
          src="/images/not-found-bg.png"
          alt="Astronaut"
          width={200}
          height={200}
        />
      </motion.div>
    </motion.div>
  );
}
