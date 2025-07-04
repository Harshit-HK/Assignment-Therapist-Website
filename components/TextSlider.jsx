"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LuHeartHandshake } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";

const TextSlider = () => {
  const TEXTS = [
    <>
      <LuHeartHandshake className="inline mr-2" />
      Greater Peace in Your Heart
    </>,
    <>
      <FaRegHeart className="inline mr-2" />
      Greater Love in Your Relationships
    </>,
    <>
      <FaRegCompass className="inline mr-2" />
      Greater Purpose in Your Life Direction
    </>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => (i + 1) % TEXTS.length),
      1500
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2 className=" lg:text-xl font-semibold text-[rgb(181,219,223)] h-12 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline mr-2" />
          {TEXTS[index]}
        </motion.div>
      </AnimatePresence>
    </h2>
  );
};

export default TextSlider;
