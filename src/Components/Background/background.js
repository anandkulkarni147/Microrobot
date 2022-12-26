import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import bacteria from "../../Images/bacteria.svg";
import LostBacteria1 from "../../Images/bac-lose1.svg";
import LostBacteria2 from "../../Images/bac-lose2.svg";
import LostBacteria3 from "../../Images/bac-lose3.svg";
import LostBacteria4 from "../../Images/bac-lose4.svg";
import LostBacteria5 from "../../Images/bac-lose5.svg";
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
      // document.getElementById("bacteria").style.display = "none";
      document.getElementById("lostBacteria1").style.visibility = "visible";
      console.log("Entered: " + posX);
      loseAnimation();
    } else {
      setPosX(posX + 3);
    }
  };

  const animationProps = {
    initial: { x: 450, y: 0, scale:'1.4' },
    show: {
      x: posX,
      y: 0,
      transition: {
        ease: "linear",
      },
    },
    exit: {
      x: posX+20,
      opacity: 0,
      scale: 2,
    },
  };

  const lossAnimationProps = {
    initial: { x: posX+200, y: -130 },
    loss: {
      x: posX+150,
    }
  }
  const lossAnimationProps5 = {
    initial: { x: posX+200, y: -130 },
    loss: {
      x: posX+150,
      scale: 3,
      opacity: 0
    }
  }

  function loseAnimation(){
    console.log("sdasd")
    let id = setInterval(frame, 550);
    let i=2;

    function frame() {
      if (i==6) {
        clearInterval(id);
      } 
      else {
        let k=i-1;
        let cName1 = "lostBacteria"+k;
        let cName2 = "lostBacteria"+i;
        console.log(cName1+"\n"+cName2);
        document.getElementById(cName1+"").style.display = "none";
        document.getElementById(cName2+"").style.display = "block";
        i++;
      }
    }
  }

  return (
    <div>
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
      <div>
        <span className="lostBacteria1" id="lostBacteria1" style={{display:'none'}}>
          {!visible && <motion.img variants={lossAnimationProps} src={LostBacteria1} initial="initial" animate="loss" />}
        </span>
        <span className="lostBacteria2" id="lostBacteria2" style={{display:'none'}}>
          {!visible && <motion.img variants={lossAnimationProps} src={LostBacteria2} initial="initial" animate="loss" />}
        </span>
        <span className="lostBacteria3" id="lostBacteria3" style={{display:'none'}}>
          {!visible && <motion.img variants={lossAnimationProps} src={LostBacteria3} initial="initial" animate="loss" />}
        </span>
        <span className="lostBacteria4" id="lostBacteria4" style={{display:'none'}}>
          {!visible && <motion.img variants={lossAnimationProps} src={LostBacteria4} initial="initial" animate="loss" />}
        </span>
        <span className="lostBacteria5" id="lostBacteria5" style={{display:'none'}}>
          {!visible && <motion.img variants={lossAnimationProps5} src={LostBacteria5} initial="initial" animate="loss" />}
        </span>
      </div>
    </div>
  );
}

export default Background;
