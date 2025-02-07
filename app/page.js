"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import LoveModal from "./components/LoveModal";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <FloatingHearts />

      <motion.div
        className="max-w-md w-full space-y-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-pink-500 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Hey, You! My Favorite 😍
          </motion.h1>

          <motion.div
            className="flex justify-center gap-3 mb-6"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {["✨", "💝", "💫"].map((emoji, index) => (
              <motion.span
                key={`home-emoji-${index}`}
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-pink-600 font-medium"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          I have a sweet little secret to share... 🤫
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg hover:shadow-xl transform"
        >
          Click me, please! 🥺
        </motion.button>
      </motion.div>

      <motion.div
        className="fixed bottom-4 right-4 text-pink-400/50 text-sm font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Made with 💝 by gm
      </motion.div>

      <LoveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
