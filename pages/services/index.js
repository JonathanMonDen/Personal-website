import {} from "react-icons/rx";

export const serviceData = [];

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 className="text-3xl lg:text-5xl xl:mt-8" variants={fadeIn('left',0.6)}
        initial="initial"
        animate="animate"
        exit="hidden">
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p className="mb-4 max-w-[400px] mx-auto lg:mx-0" variants={fadeIn('left',0.6)}
        initial="initial"
        animate="animate"
        exit="hidden">Lorem ipsum</motion.p>
          </div>
          <motion.div className="w-full xl:max-w-[65%]" variants={fadeIn('up',0.6)}
        initial="initial"
        animate="animate"
        exit="hidden">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
