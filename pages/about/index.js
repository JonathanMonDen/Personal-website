import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "HTML",
        icons: [<FaHtml5 />, <FaWordpress />],
      },
      {
        title: "CSS",
        icons: [<FaCss3 />, <FaSass />, <FaBootstrap />, <SiTailwindcss />],
      },
      {
        title: "JS",
        icons: [<FaJs />, <FaReact />, <SiNextdotjs />, <SiFramer />],
      },
      {
        title: "MISC.",
        icons: [<FaFigma />, ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Adag Payroll Services",
        stage: "July 2023 - October 2023",
      },
      {
        title: "Keytrends",
        stage: "January 2023 - June 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[180px]"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl xl:text-5xl p-4 m-6">
            Perfection is not attainable, but if we chase perfection we can
            catch <span className="text-accent font-semibold">excellence</span>
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl px-4 mx-6">
            Passionate junior Front-end developer eager to explore new horizons
          </p>
        </div>

        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div>{item.title}</div>

                  <div className="hidden md:flex">-</div>

                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-3xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
