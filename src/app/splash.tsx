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
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Floating astronaut animation
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      rotate: [0, 1.5, -1.5, 0],
      transition: {
        y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      },
    });
  }, [controls]);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1.5 : 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      duration: 3 + Math.random() * 2,
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
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-green-400/20 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-50 blur-sm"
          style={{ top: `${p.top}%`, left: `${p.left}%` }}
          animate={{ x: [0, p.x], y: [0, p.y] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Glitch logo */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-green-400 tracking-widest relative glitch mb-4 select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        ZIA<span className="text-white">SPACE</span>
      </motion.h1>

      {/* New Tagline with animation */}
      <motion.p
        className="text-lg md:text-xl text-green-200 max-w-lg leading-relaxed mb-6 font-light"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="text-green-400 font-semibold">Exploring</span> the
        future of <span className="text-white">Web</span> &{" "}
        <span className="text-white">Mobile Development</span> 🚀
      </motion.p>

      {/* Progress bar */}
      <motion.div className="w-72 h-2 bg-gray-800/50 rounded-full overflow-hidden border border-green-400/30 mb-8">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating astronaut */}
      <motion.div animate={controls}>
        <img
          src="/images/not-found-bg.png"
          alt="Astronaut"
          width={220}
          height={220}
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* Extra glow overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <style jsx>{`
        .glitch {
          position: relative;
        }
      `}</style>
    </motion.div>
  );
}
