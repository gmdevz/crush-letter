"use client";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
      };

      setHearts((prevHearts) => [...prevHearts, heart]);

      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
      }, heart.animationDuration * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-3xl"
          style={{
            left: `${heart.left}%`,
            animation: `float ${heart.animationDuration}s linear`,
            bottom: "-20px",
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
