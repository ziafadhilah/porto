"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const controls = useAnimation();
  const [typedText, setTypedText] = useState("");
  const fullText = "> Initializing hyperspace sequence...";

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      rotate: [0, 1.5, -1.5, 0],
      opacity: 1,
      scale: 1,
      transition: {
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      },
    });
  }, [controls]);

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 relative overflow-hidden font-mono"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: ["0% 0%", "10% 10%", "0% 0%"] }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Nebula Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-800 opacity-20 blur-3xl rounded-full -z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting Particles */}
      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-br from-transparent to-white rounded-full blur-sm"
        animate={{
          rotate: 360,
          x: [80, 80, -80, -80, 80],
          y: [0, 60, 0, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "25%", left: "50%" }}
      />

      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-br from-transparent to-white rounded-full blur-sm opacity-50"
        animate={{
          rotate: -360,
          x: [-80, -80, 80, 80, -80],
          y: [0, -60, 0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "70%", left: "50%" }}
      />

      {/* Logo / Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-green-400 tracking-widest glitch select-none mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ZIA SPACE
      </motion.h1>

      {/* Typing Text */}
      <motion.pre
        className="text-sm md:text-lg text-green-300 max-w-md whitespace-pre-wrap leading-relaxed tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {typedText}
      </motion.pre>

      {/* Astronaut / Logo Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        className="mt-10"
      >
        <img
          src="/images/not-found-bg.png"
          alt="Astronaut Floating"
          width={200}
          height={200}
          className="opacity-80"
        />
      </motion.div>

      {/* Glitch Effect */}
      <style jsx>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(class);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: #00ffff;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          animation: glitchBottom 3s infinite linear alternate-reverse;
          color: #ff00ff;
        }
        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          20% {
            clip: rect(0, 9999px, 15px, 0);
          }
          40% {
            clip: rect(0, 9999px, 0, 0);
          }
        }
        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          30% {
            clip: rect(10px, 9999px, 9999px, 0);
          }
          60% {
            clip: rect(0, 9999px, 0, 0);
          }
        }
      `}</style>
    </motion.div>
  );
}
