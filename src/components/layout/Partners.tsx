import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import solanaImg from "../../assets/solana.png";
import arweaveImg from "../../assets/arweave.png";
import bittensorImg from "../../assets/bittensor.png";
import redCircleImg from "../../assets/red-logo.png";
import telegramImg from "../../assets/telegram.png";
import middleImg from "../../assets/bottom-left-blob.webp";

const baseLogos = [
  solanaImg,
  arweaveImg,
  bittensorImg,
  redCircleImg,
  telegramImg,
];

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // repeatCount: how many times the base logo list is duplicated
  const repeatCount = 2;
  const logos = Array.from({ length: repeatCount }, () => baseLogos).flat();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // loopDistance: how many pixels the logos should travel across one cycle
  const loopDistance = 500;
  // multiply loopDistance by 3 here to exaggerate the movement speed
  const x = useTransform(scrollYProgress, (v) => 3 * -loopDistance * v);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-screen gap-8 4xl:gap-12 relative"
    >
      <img
        src={middleImg}
        alt="bottom left"
        className="absolute -bottom-[250px] -left-[100px] opacity-60 -z-10 rotate-[60deg] hidden md:block"
      />
      <h2 className="text-3xl lg:text-5xl 2xl:text-[64px] font-medium text-center">
        Projects integrated into the Arrakis AI Ecosystem
      </h2>

      <div className="w-full overflow-hidden mt-10">
        <motion.div
          style={{ x }}
          className="flex items-center gap-16 sm:gap-24 xl:gap-32 will-change-transform"
        >
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index % baseLogos.length}`}
              className="h-8 sm:h-10 xl:h-12 flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
