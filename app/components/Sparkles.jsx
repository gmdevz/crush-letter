"use client";
import { useEffect, useState } from "react";

export default function Sparkles() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 10 + 5,
        animationDuration: 2 + Math.random() * 3,
      };

      setSparkles((prev) => [...prev, sparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, sparkle.animationDuration * 1000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-300"
          style={{
            left: `${sparkle.left}%`,
            fontSize: `${sparkle.size}px`,
            animation: `sparkle ${sparkle.animationDuration}s linear`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}
