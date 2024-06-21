"use client";
import { motion, LayoutGroup, cubicBezier } from "framer-motion";
import "./sass/main.scss";
import landingImg from "@/images/landing.jpg";

// Components
import Banner from "@/components/Banner";

export default function Landing() {
  return (
    <div className="bg-base-200">
      <Banner />
      <div className="transition-image final">
        <motion.img
          initial={{
            opacity: 0,
            y: 400,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
              duration: 3,
              delay: 1.6,
            },
          }}
          src={landingImg.src}
        />
      </div>
    </div>
  );
}
