"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const controls = useAnimation();
  const [typedText, setTypedText] = useState("");
  const fullText = "You need to go back.";

  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      opacity: 1,
      scale: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        },
        opacity: { duration: 1 },
        scale: { duration: 1 },
      },
    });
  }, [controls]);

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 relative overflow-hidden"
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

      {/* Astronot Floating Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={controls}
        className="mb-10"
      >
        <img
          src="/images/not-found-bg.png"
          alt="Lost Astronaut"
          width={300}
          height={300}
          className="opacity-90"
        />
      </motion.div>

      {/* Text Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-semibold mb-4 tracking-wider text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404 - You Are Lost in Space
      </motion.h1>

      {/* Typing Description */}
      <motion.pre
        className="text-sm md:text-lg text-purple-300 max-w-lg mb-10 whitespace-pre-wrap leading-relaxed font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {typedText}
      </motion.pre>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-6 py-3 border border-purple-500 rounded-md text-purple-300 hover:bg-purple-700 hover:text-white transition"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </motion.div>
  );
}
