import { motion, easeOut } from "framer-motion";
import Button from "../ui/Button";
import middleImg from "../../assets/bottom-left-blob.webp";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delay between each child
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const CrowdSourcing = () => {
  return (
    <section className="sm:h-screen h-[80vh] flex flex-col justify-center items-start relative overflow-hidden">
      <img
        src={middleImg}
        alt="bottom left"
        className="absolute -bottom-[250px] -left-[100px] opacity-60 -z-10 rotate-[60deg] hidden md:block"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="xl:w-4/5 2xl:w-3/5 space-y-4 4xl:space-y-8"
      >
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl 2xl:text-[64px] font-medium w-3/4"
        >
          Crowdsourcing our collective intelligence to build the best AI
        </motion.h2>

        <motion.div variants={item} className="w-11/12 lg:w-2/3 2xl:w-[88%]">
          <p className="4xl:text-2xl mb-2 sm:mb-3">
            Open source AI has been lagging behind the likes of Google and
            OpenAI by billions of dollars.
          </p>

          <p className="4xl:text-2xl">
            Salt aims to solve that by rewarding open source developers who
            contribute to the democratization of AI. We run competitions between
            AI models to find and reward the best AI models. As a result, our
            users will be able to access the latest cutting edge AI models.
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Button
            className="px-12 py-3 xl:py-5.5 text-lg md:text-xl 4xl:text-2xl"
            variant="gradient"
          >
            Use The Cutting Edge AI
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CrowdSourcing;
