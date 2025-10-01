import { motion, easeOut } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

const StatCards = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8"
    >
      <motion.div
        variants={item}
        className="bg-gradient-to-r from-[#96348833] via-[#FC6F3233] to-[#FF4A5933] rounded-[91px] flex flex-col gap-1 sm:gap-2 4xl:gap-5 items-center p-5 sm:p-8"
      >
        <h4 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl 4xl:text-6xl">
          1,873
        </h4>
        <p className="text-lg 3xl:text-2xl">LLM models</p>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-gradient-to-r from-[#96348833] via-[#FC6F3233] to-[#FF4A5933] rounded-[91px] flex flex-col gap-1 sm:gap-2 4xl:gap-5 items-center p-5 sm:p-8"
      >
        <h4 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl 4xl:text-6xl">
          $326,734
        </h4>
        <p className="text-lg 3xl:text-2xl">Paid to data scientists</p>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-gradient-to-r from-[#96348833] via-[#FC6F3233] to-[#FF4A5933] rounded-[91px] flex flex-col gap-1 sm:gap-2 4xl:gap-5 items-center p-5 sm:p-8"
      >
        <h4 className="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl 4xl:text-6xl">
          6,557
        </h4>
        <p className="text-lg 3xl:text-2xl">Developers</p>
      </motion.div>
    </motion.div>
  );
};

export default StatCards;
