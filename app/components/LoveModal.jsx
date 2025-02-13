"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactConfetti from "react-confetti";
import SuccessScreen from "./SuccessScreen";

export default function LoveModal({ isOpen, onClose }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const moveButton = () => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Fixed button dimensions
    const buttonWidth = 250; // Increased to account for text and padding
    const buttonHeight = 80;

    // Calculate maximum positions
    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    // Generate new position within safe bounds
    const newX = Math.floor(Math.random() * (maxX * 0.8)); // Using 80% of available space
    const newY = Math.floor(Math.random() * (maxY * 0.8));

    setPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowSuccess(true);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <SuccessScreen isVisible={showSuccess} key="success-screen" />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        {showConfetti && (
          <ReactConfetti
            colors={["#FF69B4", "#FFB6C1", "#FFC0CB", "#FF1493"]}
            numberOfPieces={isMobile ? 150 : 200}
            recycle={false}
            gravity={0.2}
            tweenDuration={4000}
          />
        )}
        <motion.div
          className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 max-w-md w-full shadow-xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-pink-500 mb-6">
            🦋 My Butterfly Effect 🦋
          </h2>

          <div className="flex justify-center gap-2 mb-4">
            {["💖", "✨", "💝"].map((emoji) => (
              <span key={emoji} className="text-2xl">
                {emoji}
              </span>
            ))}
          </div>

          <p className="text-xl text-pink-600 mb-8 font-medium text-center">
            I get butterflies every time we chat— are you the reason, or should
            I blame the chemistry?🦋🥰
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
            >
              It's definitely chemistry! 💘
            </motion.button>

            <motion.button
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 shadow-md"
              animate={{
                x: position.x,
                y: position.y,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.8,
              }}
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
                zIndex: 100,
              }}
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              onClick={moveButton}
            >
              Need more butterflies 🦋
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
