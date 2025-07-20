"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Info, Menu, X } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Info", path: "/information", icon: <Info size={20} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-80 bg-black/20 backdrop-blur-2xl border-r border-green-400/10 p-6 flex-col justify-between z-50 overflow-hidden font-mono">
        {/* Moving Noise Overlay */}
        <motion.div
          className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting Particle */}
        <motion.div
          className="absolute w-5 h-5 bg-gradient-to-br from-green-300 to-cyan-400 rounded-full blur-sm opacity-30"
          animate={{
            rotate: 360,
            x: [0, 30, 0, -30, 0],
            y: [40, 20, -40, -20, 40],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "60%", left: "50%" }}
        />

        {/* Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 scanline"></div>

        {/* Glowing Border */}
        <motion.div
          className="absolute inset-0 border border-green-400/20 rounded-xl pointer-events-none"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <motion.h1
            className="text-2xl font-bold tracking-[0.3em] mb-10 select-none bg-gradient-to-r from-green-400 via-cyan-300 to-green-400 bg-clip-text text-transparent animate-gradientMove"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ZIA FADHILAH
          </motion.h1>

          <nav className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                    pathname === item.path
                      ? "bg-gradient-to-r from-green-700/30 to-green-500/20 text-green-300 border border-green-400/40 shadow-md"
                      : "hover:bg-green-700/10 text-gray-300"
                  }`}
                >
                  <span className="relative group-hover:glow-icon">
                    {item.icon}
                  </span>
                  <span className="text-sm uppercase tracking-widest group-hover:glow-text">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Animated Divider */}
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent my-8"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.p
          className="text-[10px] text-green-500 tracking-wider relative z-10 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          © {new Date().getFullYear()} Zia Fadhilah
        </motion.p>
      </aside>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-5 left-5 z-50 bg-black/50 p-2 rounded-md backdrop-blur-md border border-green-400/30 text-green-300 hover:bg-green-700/20 transition"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-black/80 backdrop-blur-lg border-r border-green-400/20 p-6 z-50 flex flex-col justify-between overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute inset-0 border border-green-400/20 rounded-xl pointer-events-none"
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h1 className="font-bold text-xl tracking-widest bg-gradient-to-r from-green-400 via-cyan-300 to-green-400 bg-clip-text text-transparent animate-gradientMove">
                  ZIA FADHILAH
                </h1>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-green-300 hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-300 group ${
                        pathname === item.path
                          ? "bg-gradient-to-r from-green-700/30 to-green-500/20 text-green-300 border border-green-400/40 shadow-md"
                          : "hover:bg-green-700/10 text-gray-300"
                      }`}
                    >
                      <span className="relative group-hover:glow-icon">
                        {item.icon}
                      </span>
                      <span className="text-sm uppercase tracking-widest group-hover:glow-text">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <p className="text-[10px] text-green-500 tracking-wider mt-10 relative z-10">
              © {new Date().getFullYear()} Zia Fadhilah
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra Styles */}
      <style jsx>{`
        .scanline {
          background-image: linear-gradient(
            rgba(0, 255, 0, 0.05) 50%,
            transparent 50%
          );
          background-size: 100% 3px;
          opacity: 0.1;
        }

        .group:hover .glow-text {
          text-shadow: 0 0 4px #39ff14, 0 0 8px #39ff14, 0 0 12px #39ff14;
          transition: text-shadow 0.3s ease-in-out;
        }

        .group:hover .glow-icon {
          filter: drop-shadow(0 0 5px #39ff14);
          transition: filter 0.3s ease-in-out;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
