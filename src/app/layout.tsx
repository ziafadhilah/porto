"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      rotate: [0, 1, -1, 0],
      transition: {
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
      },
    });

    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Lebih lama (5 detik)

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <html lang="en">
      <body className="bg-black text-white font-mono overflow-hidden">
        {showSplash ? (
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 5 }}
            style={{
              backgroundImage: "url('/images/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Nebula Glow */}
            <motion.div
              className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 blur-3xl rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Orbiting Lights */}
            <motion.div
              className="absolute w-10 h-10 bg-gradient-to-br from-transparent to-white rounded-full blur-xl opacity-60"
              animate={{
                rotate: 360,
                x: [120, 120, -120, -120, 120],
                y: [0, 80, 0, -80, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ top: "30%", left: "50%" }}
            />

            <motion.div
              className="absolute w-10 h-10 bg-gradient-to-br from-transparent to-cyan-300 rounded-full blur-xl opacity-40"
              animate={{
                rotate: -360,
                x: [-120, -120, 120, 120, -120],
                y: [0, -80, 0, 80, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ top: "70%", left: "50%" }}
            />

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-green-400 tracking-widest glitch select-none mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              ZIA UNIVERSE
            </motion.h1>

            {/* Subtitle */}
            <motion.pre
              className="text-sm md:text-lg text-green-300 max-w-md whitespace-pre-wrap leading-relaxed tracking-wide opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              {`
> Launching Galactic Interface...
> Calibrating Nebula Drive...
`}
            </motion.pre>

            {/* Astronaut */}
            <motion.div animate={controls} className="mt-12">
              <img
                src="/images/not-found-bg.png"
                alt="Astronaut Floating"
                width={220}
                height={220}
                className="opacity-90"
              />
            </motion.div>

            {/* Scanline & Noise Effect */}
            <div className="absolute inset-0 pointer-events-none z-0 scanline"></div>
            <motion.div
              className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            ></motion.div>

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
                animation: glitchTop 3s infinite linear alternate-reverse;
              }
              .glitch::after {
                animation: glitchBottom 4s infinite linear alternate-reverse;
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
              .scanline {
                background-image: linear-gradient(
                  rgba(0, 255, 0, 0.05) 50%,
                  transparent 50%
                );
                background-size: 100% 3px;
                opacity: 0.08;
              }
            `}</style>
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
