"use client";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isButterfly = Math.random() > 0.5;
      const element = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        emoji: isButterfly ? "🦋" : "💖",
        rotate: isButterfly ? Math.random() * 360 : 0,
      };

      setElements((prevElements) => [...prevElements, element]);

      setTimeout(() => {
        setElements((prevElements) =>
          prevElements.filter((e) => e.id !== element.id)
        );
      }, element.animationDuration * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-3xl"
          style={{
            left: `${element.left}%`,
            animation: `float ${element.animationDuration}s linear`,
            bottom: "-20px",
            transform: `rotate(${element.rotate}deg)`,
            transition: "transform 2s ease-in-out",
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
}
