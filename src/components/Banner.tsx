"use client";
import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={"confetti"} />
      <BannerRowBottom title={"bomb"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }: { title: string; disabled?: boolean }) => (
  <motion.span className="row-title" variants={disabled ? undefined : banner} initial="initial" animate="animate">
    {title.split("").map((letter, i) => (
      <motion.span key={`letter-${i}`} className="row-letter" variants={disabled ? undefined : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }: { title: string }) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <span className="row-message">
          We specialize in helping you share happy news and celebrate big accomplishments{" "}
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }: { title: string }) => {
  return (
    <div className="banner-row center">
      <motion.a
        href="/home"
        className="start-button bg-primary-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.5, delay: 3.5 }}
      >
        <span>Click here</span>
        <span>to start</span>
      </motion.a>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
