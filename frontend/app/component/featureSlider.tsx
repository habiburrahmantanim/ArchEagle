"use client"; // Required for Framer Motion and state
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { features } from "@/data";

const FeatureSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto-play logic: Change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={features[index].name}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={features[index].image}
            alt={features[index].name}
            fill // This makes it full-page
            priority // Loads the first image faster
            className="object-cover brightness-75"
          />

          {/* Overlay Text - Similar to Abel Design Group */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase"
            >
              {features[index].name}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators (Optional dots at bottom) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 ${
              i === index ? "w-12 bg-white" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;
