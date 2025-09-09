"use client";
import { motion } from "framer-motion";

export default function FloatCard({ children }) {
  return (
    <motion.div
      initial={{ scale: 0.98, y: 6 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-card p-5"
    >
      {children}
    </motion.div>
  );
}
