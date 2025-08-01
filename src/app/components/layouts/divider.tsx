"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Garis Utama */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-1/7 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
      />

      {/* Glow Efek di Tengah */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-6 h-6 bg-sky-400 rounded-full blur-lg"
      />
    </div>
  );
}
