"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [displayText, setDisplayText] = useState("> Initiating transmission");
  const [showDots, setShowDots] = useState(true);
  const [typedText, setTypedText] = useState("");

  const details = `
Nama   : Zia Fadhilah
Role   : Web & Mobile Developer
Focus  : Frontend UI/UX, Backend API, Flutter & React Native

Misi saya adalah membuat antarmuka yang menarik dan mudah digunakan, 
membangun ekosistem teknologi dengan nuansa visual yang elegan.

Jika kamu membaca pesan ini, berarti kita sama-sama sedang 
berjelajah di ruang ide tak berujung. 🚀
`;

  useEffect(() => {
    let dotInterval;
    let typingTimeout;

    dotInterval = setInterval(() => {
      setDisplayText((prev) =>
        prev.endsWith("...") ? "> Initiating transmission" : prev + "."
      );
    }, 500);

    typingTimeout = setTimeout(() => {
      clearInterval(dotInterval);
      setShowDots(false);

      let index = 0;
      const typingInterval = setInterval(() => {
        setTypedText(details.slice(0, index));
        index++;
        if (index > details.length) clearInterval(typingInterval);
      }, 20);
    }, 3000);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 relative overflow-hidden font-mono">
      {/* Background Animation */}
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
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Nebula Glow */}
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

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold italic mb-6 text-green-400 tracking-widest glitch"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ABOUT ME
      </motion.h1>

      {/* Terminal Text */}
      <motion.pre
        className="text-left text-sm md:text-lg text-green-400 bg-black/30 p-6 rounded-2xl backdrop-blur-md shadow-lg max-w-xl w-full border border-green-500/30 whitespace-pre-wrap leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {displayText}
        {showDots ? "" : typedText}
      </motion.pre>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-6 py-3 border border-green-400 rounded-2xl text-green-400 hover:bg-green-700 hover:text-white transition"
        >
          Kembali ke Beranda
        </Link>
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
          color: #ff00ff;
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
      `}</style>
    </div>
  );
}
