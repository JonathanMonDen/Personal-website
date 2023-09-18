import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            className="text-4xl text-center mb-12"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <span className="text-accent">{"<"}</span> Let{"'"}s connect{" "}
            <span className="text-accent">{">"}</span>
          </motion.h2>
          <motion.form
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex gap-x-6 w-full">
              <input className="input" placeholder="name" type="text"></input>
              <input className="input" placeholder="email" type="text"></input>
            </div>
            <input className="input" placeholder="Subject" type="text"></input>
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                <span className="text-accent">{"<"}</span> Let{"'"}s talk{" "}
                <span className="text-accent">{"/>"}</span>
              </span>
              <BsArrowRight className="-translate-y-[200px] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
