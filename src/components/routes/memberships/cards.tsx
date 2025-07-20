"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cards = [
  { id: 1, title: "Card One" },
  { id: 2, title: "Card Two" },
  { id: 3, title: "Card Three" },
];

export default function StackedDragCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getPosition = (i: number) => {
    const index = (i - activeIndex + cards.length) % cards.length;

    // Main card
    if (index === 0) return { x: 0, y: 0, scale: 1, zIndex: 30 };

    // Next stacked cards (limit to 2)
    if (index === 1) return { x: 40, y: 0, scale: 0.9, zIndex: 20 };

    // Previous card goes to bottom left
    if ((activeIndex - i + cards.length) % cards.length === 1) {
      return { x: -40, y: 0, scale: 0.9, zIndex: 20 };
    }

    return { x: 0, y: 0, scale: 0.7, zIndex: 0, opacity: 0 };
  };

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 50;

    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full max-w-lg h-80 mx-auto mt-16">
      {cards.map((card, i) => {
        const { x, y, scale, zIndex, opacity = 1 } = getPosition(i);

        const isActive = i === activeIndex;

        return (
          <AnimatePresence key={card.id}>
            <motion.div
              className={`absolute w-full h-64 flex flex-col gap-4 justify-between font-lexend text-white bg-black [clip-path:polygon(0_0,calc(100%_-_1rem)_0,100%_1rem,100%_100%,1rem_100%,0_calc(100%_-_1rem))] p-4 border border-primary`}
              style={{
                zIndex,
              }}
              initial={false}
              animate={{ x, y, scale, opacity }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={isActive ? handleDragEnd : undefined}
            >
              <header className="font-audiowide text-xl">
                <p>1 Month</p>
                <p className="text-sm font-lexend text-white/60">
                  No commitments.
                </p>
              </header>
              <main className="flex items-end gap-1.5 mt-auto">
                <p className="text-2xl">
                  {Intl.NumberFormat("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  }).format(2000)}
                </p>
                <span className="text-white/70">per month</span>
              </main>
              <footer>
                <Button className="[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))] w-full">
                  Get Started
                </Button>
              </footer>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
}
