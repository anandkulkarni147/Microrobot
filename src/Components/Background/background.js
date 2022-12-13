import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import bacteria from "../../Images/bacteria.svg";
import "./background.css";

function Background(props) {
  const controls = useAnimationControls();

  const [posX, setPosX] = useState(400);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
      x: posX,
      y: 0,
      transition: { ease: "linear" },
    }));
    setPosX(posX + 3);
  }, [posX, controls]);

  return (
    <div className="bacteria">
      <motion.img
        initial={{
          x: 400,
          y: 0,
        }}
        src={bacteria}
        animate={controls}
      />
    </div>
  );
}

export default Background;
