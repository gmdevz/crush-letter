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
    if (isMobile) {
      const maxX = window.innerWidth * 0.2; // Reduced movement range
      const maxY = window.innerHeight * 0.15;
      const newX = Math.random() * maxX - maxX / 2;
      const newY = Math.random() * maxY - maxY / 2;
      setPosition({ x: newX, y: newY });
    } else {
      const newX = Math.random() * 150 - 75; // Reduced movement range
      const newY = Math.random() * 150 - 75;
      setPosition({ x: newX, y: newY });
    }
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
      <motion.div
        key="modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {showConfetti && (
          <ReactConfetti
            drawShape={(ctx) => {
              const size = isMobile ? 4 : 8; // Smaller on mobile, larger on desktop
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.bezierCurveTo(size, -size, size * 2, 0, size, size);
              ctx.bezierCurveTo(0, size * 2, -size, size, 0, 0);
              ctx.fill();
            }}
            colors={["#FF69B4", "#FFB6C1", "#FFC0CB", "#FF1493"]}
            numberOfPieces={isMobile ? 150 : 200}
            recycle={false}
            gravity={0.2}
            tweenDuration={4000}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}
        <motion.div
          className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 max-w-md w-full shadow-xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <motion.h2
            className="text-3xl font-bold text-pink-500 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hey, You 🥰
          </motion.h2>

          <motion.div
            className="flex justify-center gap-2 mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {["💖", "✨", "💝"].map((emoji, index) => (
              <motion.span
                key={`modal-emoji-${index}`}
                className="text-2xl"
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

          <motion.p
            className="text-xl text-pink-600 mb-8 font-medium text-center"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Every time we talk, I feel butterflies. Want to make them yours?🥰
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
            >
              Yes, I'd love to! 💖
            </motion.button>

            <motion.button
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition shadow-md"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "all 0.2s ease", // Faster transition
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
                position: "relative", // Added for better positioning
                zIndex: 10, // Ensures button stays above other elements
              }}
              onMouseEnter={moveButton} // Changed from onMouseOver for better response
              onTouchStart={moveButton}
              onClick={moveButton}
            >
              Let me think 🤔
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
