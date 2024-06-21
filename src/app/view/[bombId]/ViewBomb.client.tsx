"use client";
import { Bomb } from "@prisma/client";
import Letter from "@/components/Letter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
import { cn } from "@/utils";
import waxSeal from "@/images/waxSeal.png";
import Image from "next/image";

type Props = {
  bomb: Bomb;
};

// TODO(connor): make all pages mobile friendly
export default function ViewBombClient({ bomb }: Props) {
  const [letterOpen, setLetterOpen] = useState(false);
  const [hideEnvelope, setHideEnvelope] = useState(false);

  useEffect(() => {
    const jsConfetti = new JSConfetti();
    async function launchConfetti() {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < 5; i++) {
        jsConfetti.addConfetti({
          confettiNumber: bomb.confettiNumber,
          confettiRadius: bomb.confettiRadius,
          confettiColors: bomb.confettiColors,
        });

        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    }

    if (letterOpen) {
      launchConfetti();
    }
  }, [bomb, letterOpen]);

  // TODO(connor): initial before click, dark and top theatre light on letter and then fade in custom color

  // Z index animation weird with Framer Motion? Super hacky
  useEffect(() => {
    if (letterOpen) {
      setTimeout(() => setHideEnvelope(true), 2000);
    }
  }, [letterOpen]);

  return (
    <motion.div
      className="flex h-full justify-center w-full items-center"
      style={{ backgroundColor: bomb.backgroundColor }}
    >
      <div
        key="envelope-background"
        className={cn("h-[300px] w-[400px] bg-[#eee] flex justify-center relative rounded-b-xl drop-shadow-2xl", {
          "cursor-pointer": !letterOpen,
        })}
        onClick={() => setLetterOpen(true)}
      >
        <motion.div
          key="envelope-lid"
          className="origin-top
           top-0 left-0 absolute border-solid border-t-[150px] border-r-[200px] border-b-[150px] border-l-[200px] border-transparent border-t-[#eee]"
          animate={{
            transform: letterOpen ? "rotateX(180deg)" : "",
            transition: { duration: 0.7, delay: 0.5 },
          }}
        />
        <motion.div
          key="envelope-front"
          className={cn(
            "z-[5] rounded-b-xl border-solid border-t-[150px] border-r-[200px] border-b-[150px] border-l-[200px] border-t-transparent border-r-[#ddd] border-b-[#ccc] border-l-[#ccc]",
            {
              "z-0": hideEnvelope,
            }
          )}
        />
        <motion.div
          key="wax-seal"
          className="absolute top-[120px] z-10 w-[50px] h-[50px]"
          animate={{
            opacity: letterOpen ? 0 : 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Image src={waxSeal} alt="" />
        </motion.div>
        {letterOpen && (
          <motion.div
            key="letter"
            className="absolute z-[2]"
            animate={{ y: [-300, -820, -400], scale: [0, 0.47, 1] }}
            transition={{
              duration: 4,
              delay: 0.5,
              times: [0, 0.5, 1],
            }}
          >
            <Letter bomb={bomb} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
