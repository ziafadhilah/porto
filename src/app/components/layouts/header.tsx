"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      let current = "home";
      sections.forEach((sec, i) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = navItems[i].href.replace("#", "");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-sky-400/30"
          : "bg-black/40 backdrop-blur-sm border-b border-sky-400/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative text-2xl font-extrabold text-sky-400 transition-all duration-300 hover:scale-110 hover:text-sky-300 group"
        >
          ZIA<span className="text-white">SPACE</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative pb-1 text-sky-300 hover:text-white transition-all duration-300"
            >
              <span
                className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300
                ${
                  activeSection === item.href.replace("#", "")
                    ? "after:w-full text-white"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sky-400 hover:scale-110 transition-transform duration-300"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-t border-sky-400/20"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative pb-1 transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white after:w-full"
                      : "text-sky-300 hover:text-white after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
