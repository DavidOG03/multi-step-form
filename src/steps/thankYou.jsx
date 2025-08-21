import React from "react";
import { motion, scale, transform } from "framer-motion";

const ThankYou = () => {
  const initial = {
    opacity: 0,
    scale: 0.8,
    transform: "translateX(-50%), translateY(-50%)",
  };
  const animate = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  };
  return (
    <motion.div className="thank-you" initial={initial} whileInView={animate}>
      <img src="/images/icon-thank-you.svg" alt="Thank You" />
      <h1>Thank You!</h1>
      <p>
        Thanks for confirming your subscription. We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </motion.div>
  );
};

export default ThankYou;
