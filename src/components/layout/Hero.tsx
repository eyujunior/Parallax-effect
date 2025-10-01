import { motion } from "framer-motion";

type HeroProps = {
  titleCtrl: any;
};

const Hero = ({ titleCtrl }: HeroProps) => {
  return (
    <div className=" space-y-3 sm:space-y-5 2xl:space-y-7 3xl:space-y-8 4xl:space-y-9 mt-44 3xl:mt-50 4xl:mt-58 text-lg md:text-xl 4xl:text-2xl">
      <motion.h1
        animate={titleCtrl}
        style={
          {
            "--from": "var(--color-purple)",
            "--via": "var(--color-orange)",
            "--to": "var(--color-red)",
          } as React.CSSProperties
        }
        className="
          gradient-text
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-9xl w-[93%]
          xl:w-[84%] 3xl:w-4/5 font-medium

          [--hero-final:33px]           
          sm:[--hero-final:45px]
          md:[--hero-final:57px]
          lg:[--hero-final:69px]        
          2xl:[--hero-final:93px]      
          4xl:[--hero-final:125px] 
        "
      >
        A new economic primitive for funding decentralized AI
      </motion.h1>
      <p>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </p>
      <div className="flex items-center gap-6">
        <button className="px-12 py-3 xl:py-5.5 border rounded-full gradient-border cursor-pointer">
          Buy Salt AI
        </button>
        <button className="px-12 py-3 xl:py-5.5 cursor-pointer">Try Now</button>
      </div>
    </div>
  );
};

export default Hero;
