import {} from "react-icons/rx";

import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              className="text-3xl lg:text-5xl xl:mt-12"
              variants={fadeIn("left", 0.6)}
              initial="initial"
              animate="animate"
              exit="hidden"
            >
             <span className="text-accent">{'<'}</span> My work <span className="text-accent">{'>'}</span>
            </motion.h2>
            <motion.p
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              variants={fadeIn("left", 0.6)}
              initial="initial"
              animate="animate"
              exit="hidden"
            >
              <span className="text-accent">{'<'}</span> A collection of my most recent projects<span className="text-accent">{'/>'}</span>
            </motion.p>
          </div>
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("up", 0.6)}
            initial="initial"
            animate="animate"
            exit="hidden"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
