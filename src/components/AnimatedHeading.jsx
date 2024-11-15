import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedHeading = ({text,isWebkitText,styles}) => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);

  // Text variants for staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay each letter by 0.05s
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 }, // Start below and invisible
    visible: { opacity: 1, y: 0 }, // Fade in and move to the normal position
  };


  return (
    <motion.h2
      ref={headingRef}
      className={` ${isWebkitText ? 'outlined-text' : ''} ${styles}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block" // Keeps each letter inline
        >
          {char === " " ? "\u00A0" : char} {/* Add a non-breaking space for spaces */}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;
