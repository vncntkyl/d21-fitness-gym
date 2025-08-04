import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Built by Athletes",
  "Made for Everyone",
  "Built by Athletes. Made for Everyone.",
];

export default function AnimatedHero() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (phase >= phrases.length) return;

    const currentPhrase = phrases[phase];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((i) => i + 1);
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    } else {
      if (phase === 0) {
        // After finishing "Built by Athletes", wait then delete "Athletes"
        setTimeout(() => {
          setCharIndex("Built by Athletes".length);
          deleteWord("Athletes", () => {
            setPhase(1);
            setText("");
            setCharIndex(0);
          });
        }, 1000);
      } else if (phase === 1) {
        // After "Made for Everyone", wait then show full
        setTimeout(() => {
          setPhase(2);
          setText("");
          setCharIndex(0);
        }, 1000);
      }
    }

    function deleteWord(wordToDelete: string, callback: () => void) {
      const deleteInterval = setInterval(() => {
        setText((prev) => {
          const updated = prev.slice(0, -1);
          if (!updated.endsWith(wordToDelete)) {
            clearInterval(deleteInterval);
            callback();
          }
          return updated;
        });
      }, 30); // delete speed
    }
  }, [charIndex, phase]);

  return (
    <div className="text-white text-4xl sm:text-6xl font-lexend uppercase p-4">
      <motion.span
        key={text}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="whitespace-pre-wrap font-bold italic text-primary"
      >
        {text}
        <span className="text-white animate-pulse">|</span>
      </motion.span>
    </div>
  );
}
