"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [displayText, setDisplayText] = useState("> Booting system");
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDisplayText((prev) =>
        prev.endsWith("...") ? "> Booting system" : prev + "."
      );
    }, 500);

    const typingTimeout = setTimeout(() => {
      clearInterval(dotInterval);
      setShowIntro(true);
    }, 3000);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 relative overflow-hidden font-mono">
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 -z-10"
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
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-200 opacity-20 blur-3xl rounded-full -z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-200 opacity-20 blur-3xl rounded-full -z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting Planet */}
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
        className="absolute w-8 h-8 bg-gradient-to-br from-transparent to-white rounded-full blur-sm"
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
        style={{ top: "10%", left: "50%" }}
      />

      {/* Scan Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/10 via-green-500/30 to-green-400/10 opacity-30 blur-md"
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold italic mb-6 text-white tracking-widest glitch"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        HOME
      </motion.h1>

      {/* Terminal Box */}
      <motion.div
        className="text-left text-sm md:text-lg text-green-400 bg-black/30 p-6 rounded-2xl backdrop-blur-md shadow-lg max-w-xl w-full mb-10 border border-green-500/30 space-y-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <pre className="whitespace-pre-wrap leading-relaxed mb-4 animate-pulse-slow">
          {displayText}
          <span className="blinking-cursor">|</span>
        </pre>

        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 text-green-300"
          >
            <p>
              Hello, I&apos;m <span className="text-white">Zia Fadhilah</span>.
            </p>
            <p>Web & Mobile Developer, focused on UI/UX & API Development.</p>
            <p>Welcome to my digital space! 🚀</p>
          </motion.div>
        )}

        {/* Animated Scan Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <Link
          href="/about"
          className="px-6 py-3 border border-green-400 rounded-2xl text-white hover:bg-green-700 hover:text-white transition"
        >
          About Me
        </Link>
        <Link
          href="/info"
          className="px-6 py-3 border border-green-400 rounded-2xl text-white hover:bg-green-700 hover:text-white transition"
        >
          Contact Info
        </Link>
      </motion.div>

      {/* Glitch Effect & Custom Animations */}
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
          color: #00ff99;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          animation: glitchBottom 3s infinite linear alternate-reverse;
          color: #00ffff;
        }

        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          20% {
            clip: rect(0, 9999px, 20px, 0);
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

        .blinking-cursor {
          animation: blink 1s step-end infinite;
          color: #00ff99;
        }

        @keyframes blink {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
