import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-slate-800"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-slate-700"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-slate-600"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
      <div>Transition</div>
    </>
  );
};

export default Transition;
