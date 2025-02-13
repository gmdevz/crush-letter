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
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <FloatingHearts />

      <div className="max-w-md w-full space-y-8 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-pink-500 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Hey, You! My Favorite 😍
        </motion.h1>

        <div className="flex justify-center gap-3 mb-6">
          {["✨", "💝", "💫"].map((emoji) => (
            <span key={emoji} className="text-3xl">
              {emoji}
            </span>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-pink-600 font-medium">
          I have a sweet little secret to share... 🤫
        </p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg hover:shadow-xl transform"
        >
          Click me, please! 🥺
        </motion.button>
      </div>

      {/* Made with 💝 by gm */}
      <LoveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
