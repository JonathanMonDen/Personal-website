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
  SiTypescript,
  SiDart,
  SiFlutter,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "HTML",
        icons: [
          <FaHtml5 key="html-icon" />,
          <FaWordpress key="wordpress-icon" />,
        ],
      },
      {
        title: "CSS",
        icons: [
          <FaCss3 key="css-icon" />,
          <FaSass key="sass-icon" />,
          <FaBootstrap key="bootstrap-icon" />,
          <SiTailwindcss key="tailwindcss-icon" />,
        ],
      },
      {
        title: "JS",
        icons: [
          <FaJs key="js-icon" />,
          <SiTypescript key="ts-icon" />,
          <FaReact key="react-icon" />,
          <SiNextdotjs key="nextjs-icon" />,
          <SiFramer key="framer-icon" />,
        ],
      },
      {
        title: "MISC.",
        icons: [
          <FaFigma key="figma-icon" />,
          <SiDart key="dart-icon" />,
          <SiFlutter key="flutter-icon" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Adag Payroll Services - App developer",
        stage: "July 2023 - October 2023",
      },
      {
        title: "Keytrends - Frontend feveloper",
        stage: "January 2023 - June 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - IES El Rincon",
        stage: "2021-2023",
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
    <div className="h-full bg-primary py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[160px] w-full h-[75%]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <motion.div
          className="flex-1 flex flex-col justify-center"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl p-4 m-6">
            Chasing perfection Catching{" "}
            <span className="text-accent font-semibold">excellence</span>
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl px-4 mx-6">
            Passionate junior Front-end developer eager to explore new horizons
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={`item-${itemIndex}`}
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
                  key={`info-${itemIndex}`}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div>
                    <span className="text-accent">{"["}</span>
                    {item.title}
                    <span className="text-accent">{"]"}</span>
                  </div>

                  <div className="hidden md:flex">-</div>

                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-3xl text-white" key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
