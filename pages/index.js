import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center h-full xl:pt-40 xl:text-left container mx-auto">
          <motion.h1
            className="h1 tracking-tight font-light"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            
            <span className="text-accent">{'</'}</span>Jonathan MD
            <span className="text-accent">{'>'}</span>
          </motion.h1>
          <motion.p
            className="max-w-sm mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          >
            <span className="text-accent">{'<'}</span>
            Perfection is not attainable but if we chase perfection we can catch excellence
            <span className="text-accent">{'>'}</span>
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
