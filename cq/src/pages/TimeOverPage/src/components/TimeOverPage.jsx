import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import mapImg from "../assets/Background.png";
import closedScrollImg from "../assets/Closed_Scroll.png";
import openScrollImg from "../assets/Open_Scroll.png";
import timeOverTextGraphic from "../assets/time_over.png";
import cqLogo from "../assets/cq.png";

export default function TimeOverPage() {
  const [showOpenScroll, setShowOpenScroll] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      setShowOpenScroll(true);
    }, 1000); // Delay before scroll animation starts

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1800); // Delay for content to appear after scroll opens

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Map Reveal */}
      <motion.img
        src={mapImg}
        alt="Map Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay Dark Gradient */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Campus Quest 4.0 Logo */}
      <motion.img
        src={cqLogo}
        alt="Campus Quest 4.0 Logo"
        className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 w-[22%] md:w-[17%] lg:w-[13%] h-auto object-contain z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      />

      {/* Main Scroll Container */}
      <motion.div
        className="relative z-10 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-5xl mt-28 md:mt-36 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {!showOpenScroll && (
            <motion.img
              key="closed-scroll"
              src={closedScrollImg}
              alt="Closed Scroll"
              className="w-full h-auto object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
          {showOpenScroll && (
            <motion.img
              key="open-scroll"
              src={openScrollImg}
              alt="Open Scroll"
              className="w-full h-auto object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* TIME OVER content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="scroll-content"
              className="absolute inset-0 flex items-center justify-center px-[5%] py-[8%]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={timeOverTextGraphic}
                alt="TIME OVER Graphic"
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Closing text */}
      <AnimatePresence>
        {showContent && (
          <motion.p
            key="sequel-text"
            className="
              relative z-10 
              text-xs md:text-sm lg:text-base 
              text-gray-200 font-serif font-normal 
              mt-6 md:mt-8 
              max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]
              text-center 
              leading-snug
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            THIS CHAPTER CLOSES.
            <span className="block sm:hidden"></span>
            BUT THE <span className="text-yellow-400 font-bold">SEQUEL</span>? THAT'S YOURS TO WRITE.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
