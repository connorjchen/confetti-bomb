"use client";
import { Bomb } from "@prisma/client";
import Letter from "@/components/Letter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import JSConfetti from "js-confetti";
import { usePathname } from "next/navigation";

type Props = {
  bomb: Bomb;
};

// TODO(connor): THIS IS THE MOST IMPORTANT PART OF THE PROJECT
export default function ViewBombClient({ bomb }: Props) {
  // TODO(connor): dark lights (spotlights like a club) and then rise and shine with open envelope
  // TODO(connor): ideally it shows a button or envelope that you click on to animate all of this
  // TODO(connor): imitate brawl squad strike box open? like a letter or tresaure chest - when click, it spins around 360 and opens on top with the letter coming out like a gem
  // TODO(connor): confetti comes directly out of box too -- copy gsap envelope example ?
  const pathname = usePathname();

  useEffect(() => {
    const jsConfetti = new JSConfetti();
    async function launchConfetti() {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = 0; i < 3; i++) {
        jsConfetti.addConfetti({
          confettiNumber: bomb.confettiNumber,
          confettiRadius: bomb.confettiRadius,
          confettiColors: bomb.confettiColors,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    if (pathname.startsWith("/view")) {
      launchConfetti();
    }
  }, [bomb, pathname]);

  return (
    <motion.div
      key={pathname}
      className="flex h-full justify-center items-center w-full"
      transition={{ duration: 3 }}
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: bomb.backgroundColor }}
    >
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>
        <Letter bomb={bomb} />
      </motion.div>
    </motion.div>
  );
}
