"use client";
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

export default function SuccessScreen({ isVisible }) {
  if (!isVisible) return null;

  const floatingHearts = {
    animate: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const pulseEmoji = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center flex-col p-4 z-50"
    >
      <Sparkles />
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-center space-y-8 max-w-lg mx-auto px-4"
      >
        <motion.div className="space-y-2">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-pink-500 mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Yaaay! 🎉
          </motion.h1>
          <motion.div
            className="flex justify-center gap-3"
            variants={floatingHearts}
            animate="animate"
          >
            {["💝", "✨", "💖", "🌟", "💕"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-3xl md:text-4xl"
                animate={pulseEmoji}
                transition={{ delay: index * 0.2 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
            alt="Cute love gif"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="space-y-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.p
            className="text-xl md:text-2xl text-pink-600 font-medium leading-relaxed"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            You’re the reason I can’t stop smiling. Blame you for that! 😘💖
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.span
              className="text-4xl md:text-5xl"
              whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
            >
              💖
            </motion.span>
            <motion.span
              className="text-4xl md:text-5xl"
              whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
            >
              ✨
            </motion.span>
            <motion.span
              className="text-4xl md:text-5xl"
              whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
            >
              💝
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
