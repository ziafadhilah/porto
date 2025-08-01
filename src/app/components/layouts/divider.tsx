"use client";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="relative w-full flex justify-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 -z-10" />
      <div className="h-[2px] w-3/4 bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
    </motion.div>
  );
}
