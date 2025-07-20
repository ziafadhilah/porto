"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function InformationPage() {
  const [displayText, setDisplayText] = useState(
    "> Establishing secure channel"
  );

  const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 .396C7.176.396.002 7.57.002 16.385c0 2.891.755 5.594 2.074 7.951L.34 32l7.836-2.055a15.9 15.9 0 0 0 7.824 2.019h.001c8.82 0 15.995-7.174 15.995-15.99C31.996 7.57 24.82.396 16 .396zm0 29.27c-2.607 0-5.13-.677-7.334-1.961l-.525-.312-4.653 1.223 1.24-4.533-.342-.588A13.96 13.96 0 0 1 2.04 16.385c0-7.732 6.28-14.012 13.96-14.012 7.68 0 13.96 6.28 13.96 14.012 0 7.73-6.28 14.011-13.96 14.011zm7.688-10.46c-.42-.21-2.48-1.225-2.865-1.363-.385-.14-.666-.21-.946.21-.28.42-1.085 1.362-1.33 1.642-.245.28-.49.315-.91.105-.42-.21-1.772-.653-3.373-2.08-1.246-1.112-2.087-2.482-2.332-2.903-.245-.42-.026-.647.184-.857.19-.19.42-.49.63-.735.21-.245.28-.42.42-.7.14-.28.07-.525-.035-.735-.105-.21-.946-2.28-1.296-3.13-.34-.82-.68-.71-.946-.72-.245-.01-.525-.012-.805-.012-.28 0-.735.105-1.12.525-.385.42-1.47 1.44-1.47 3.512 0 2.072 1.505 4.077 1.715 4.362.21.28 2.964 4.52 7.185 6.334 1.005.43 1.79.687 2.4.88 1.01.32 1.93.275 2.66.167.81-.12 2.48-1.01 2.835-1.982.35-.972.35-1.805.245-1.982-.105-.175-.385-.28-.805-.49z" />
    </svg>
  );

  const contacts = [
    {
      label: "Whatsapp",
      value: "(+62) 81212151324",
      icon: <WhatsAppIcon />,
      link: "tel:+6281212151324",
    },
    {
      label: "GitHub",
      value: "github.com/ziafadhilah",
      icon: <Github size={16} />,
      link: "https://github.com/ziafadhilah",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ziafadhilah",
      icon: <Linkedin size={16} />,
      link: "https://linkedin.com/in/ziafadhilah",
    },
    {
      label: "Instagram",
      value: "@ziafadhilah.dev",
      icon: <Instagram size={16} />,
      link: "https://instagram.com/ziafadhilah.dev",
    },
    {
      label: "Email",
      value: "ziafadhilah@example.com",
      icon: <Mail size={16} />,
      link: "mailto:ziafadhilah@example.com",
    },
  ];

  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDisplayText((prev) =>
        prev.endsWith("...") ? "> Establishing secure channel" : prev + "."
      );
    }, 500);

    const typingTimeout = setTimeout(() => {
      clearInterval(dotInterval);
      setShowContacts(true);
    }, 3000);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 relative overflow-hidden font-mono">
      {/* Background */}
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

      {/* Orbiting Glow */}
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
        className="text-4xl md:text-6xl font-extrabold italic mb-6 text-white tracking-widest glitch"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        INFORMATION
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

        {showContacts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            {contacts.map((c) => (
              <motion.a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-300 hover:text-white transition glow-hover"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-green-400">{c.icon}</span>
                <span className="text-sm md:text-base">{c.value}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>

      <Link
        href="/"
        className="px-6 py-3 border border-green-400 rounded-2xl text-white hover:bg-green-700 hover:text-white transition"
      >
        Back to Home
      </Link>

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
        .glow-hover:hover {
          text-shadow: 0 0 8px #00ff99, 0 0 12px #00ff99;
        }
      `}</style>
    </div>
  );
}
