"use client";
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

export default function SuccessScreen({ isVisible }) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center flex-col p-4 z-50"
    >
      <Sparkles />
      <div className="text-center space-y-8 max-w-lg mx-auto px-4">
        <div className="space-y-2">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-pink-500 mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Yaaay! 🎉
          </motion.h1>
          <div className="flex justify-center gap-3">
            {["💝", "✨", "💖", "🌟", "💕"].map((emoji) => (
              <span key={emoji} className="text-3xl md:text-4xl">
                {emoji}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
            alt="Cute love gif"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-pink-600 font-medium leading-relaxed">
            You're the reason I can't stop smiling. Blame you for that! 😘💖
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["💖", "✨", "💝"].map((emoji) => (
              <motion.span
                key={emoji}
                className="text-4xl md:text-5xl"
                whileHover={{ scale: 1.2 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
