import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import bacteria from "../../Images/bacteria.svg";
import "./background.css";

function Background(props) {
  const [posX, setPosX] = useState(450);
  const [visible, setVisible] = useState(true);

  const controls = useAnimation();

  const check = () => {
    if (!visible) controls.stop();
    // await controls.start({
    //   // x: posX,
    //   // y: 0,
    //   // transition: {
    //   //   ease: "circInOut",
    //   //   duration: 1,
    //   // },
    // });
    if (posX - 150 <= props.pos + 80) {
      setVisible(false);
      controls.stop();
      document.getElementById("bacteria").style.display = "none";
      console.log("Entered: " + posX);
    } else {
      setPosX(posX + 3);
    }
  };

  const animationProps = {
    initial: { x: 450, y: 0 },
    show: {
      x: posX,
      y: 0,
      transition: {
        ease: "linear",
      },
    },
    exit: {
      x: 0,
      opacity: 0,
      scale: 2,
    },
  };

  return (
    <div className="bacteria" id="bacteria">
      <AnimatePresence>
        {visible && (
          <motion.img
            variants={animationProps}
            key="modal"
            initial="initial"
            src={bacteria}
            animate="show"
            exit="exit"
            // onAnimationStart={() => check()}

            onAnimationComplete={() => check()}
            onAnimationEnd={() => {
              document.getElementById("bacteria").style.display = "flex";
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Background;
