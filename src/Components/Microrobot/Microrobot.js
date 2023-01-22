import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import microrobot1 from "../../Images/microrobot-01.svg";
import microrobot2 from "../../Images/micro-02.svg";
import microrobot3 from "../../Images/micro-03.svg";
import Background from "../Background/background";

function Microrobot(props) {
  const [leftRobotX, setLeftRobotX] = useState(100);
  const [leftRobotLock, setLeftRobotLock] = useState(false);
  const [rightRobotX, setRightRobotX] = useState(100);
  const [rightRobotLock, setRightRobotLock] = useState(false);
  const [middleRobotX, setMiddleRobotX] = useState(100);
  const [forwardMovement, setForwardMovement] = useState(false);
  const [backwardMovement, setBackwardMovement] = useState(false);

  const arenaRef = useRef(null);

  const svgVariants = {
    hidden: {
      rotate: -360,
      x: 100,
      y: 0,
    },
    leftVisible: {
      rotate: 0,
      transition: { duration: 0.5 },
      x: leftRobotX,
    },
    middleVisible: {
      rotate: 0,
      transition: { duration: 0.5 },
      x: middleRobotX,
    },
    rightVisible: {
      rotate: 0,
      transition: { duration: 0.5 },
      x: rightRobotX,
    },
  };

  const handleKeyUp = e=>{

    // w-87, a-65, s-83 , d-68;
    //left arrow-37, right arrow - 39;
    //A, D control the movements of the left sphere of the robot
    //Arrow keys control the movements of the right sphere of the robot
    //Forward movement - D, left arrow, A, right arrow   | 68, 37, 65, 39
    //Backward movement - left arrow, D, right arrow, A  | 37, 68, 39, 65

    if(!forwardMovement && !backwardMovement){
      if(e.keyCode===68 && !leftRobotLock){
        setLeftRobotX(parseFloat((leftRobotX+26.46).toFixed(2)))
        setLeftRobotLock(true)
        setMiddleRobotX(parseFloat((middleRobotX-13.53).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX-13.53).toFixed(2)))
        setForwardMovement(true)
        console.log("Forward movement started")
      }
      else if(e.keyCode===37 && !rightRobotLock){
        setLeftRobotX(parseFloat((leftRobotX+26.46).toFixed(2)))
        setRightRobotLock(true)
        setMiddleRobotX(parseFloat((middleRobotX+13.53).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX-13.53).toFixed(2)))
        setBackwardMovement(true)
        console.log("Backward movement started")
      }
    }

    else if(forwardMovement){
      
      //Forward movement - D, left arrow, A, right arrow   | 68, 37, 65, 39

      if(e.keyCode===68 && !leftRobotLock){
        setLeftRobotX(parseFloat((leftRobotX+26.46).toFixed(2)))
        setLeftRobotLock(true)
        setMiddleRobotX(parseFloat((middleRobotX-13.53).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX-13.53).toFixed(2)))
        console.log("1")
      }
      else if(e.keyCode===37 && leftRobotLock && !rightRobotLock){
        setLeftRobotX(parseFloat((leftRobotX+14.39).toFixed(2)))
        setMiddleRobotX(parseFloat((middleRobotX+14.39).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX-25.60).toFixed(2)))
        setRightRobotLock(true)
        console.log("2")
      }
      else if(e.keyCode===65 && leftRobotLock && rightRobotLock){
        setLeftRobotX(parseFloat((leftRobotX-25.60).toFixed(2)))
        setMiddleRobotX(parseFloat((middleRobotX+14.39).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX+14.39).toFixed(2)))
        setLeftRobotLock(false)
        console.log("3")
      }
      else if(e.keyCode===39 && rightRobotLock && !leftRobotLock){
        setLeftRobotX(parseFloat((leftRobotX).toFixed(2)))
        setMiddleRobotX(parseFloat((middleRobotX).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX+39.99).toFixed(2)))
        setRightRobotLock(false)
        //End forward movement cycle
        setForwardMovement(false)
        console.log("4")
      }
    }

    else if(backwardMovement){
            
      //Backward movement - left arrow, D, right arrow, A  | 37, 68, 39, 65

      //Stroke A
      if(e.keyCode===37 && !rightRobotLock){
        setLeftRobotX(parseFloat((leftRobotX+26.46).toFixed(2)))
        setRightRobotLock(true)
        setMiddleRobotX(parseFloat((middleRobotX+13.53).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX-13.53).toFixed(2)))
        console.log("1")
      }

      //Stroke B
      else if(e.keyCode===68 && !leftRobotLock && rightRobotLock){
        setLeftRobotX(parseFloat((leftRobotX+14.39).toFixed(2)))
        setMiddleRobotX(parseFloat((middleRobotX-14.39).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX-25.60).toFixed(2)))
        setLeftRobotLock(true)
        console.log("2")
      }

      //Stroke C
      else if(e.keyCode===39 && leftRobotLock && rightRobotLock){
        setLeftRobotX(parseFloat((leftRobotX-25.60).toFixed(2)))
        setMiddleRobotX(parseFloat((middleRobotX-14.39).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX+14.39).toFixed(2)))
        setRightRobotLock(false)
        console.log("3")
      }

      //Stroke D
      else if(e.keyCode===65 && !rightRobotLock && leftRobotLock){
        setLeftRobotX(parseFloat((leftRobotX-30.5).toFixed(2)))
        setMiddleRobotX(parseFloat((middleRobotX).toFixed(2)))
        setRightRobotX(parseFloat((rightRobotX+9.49).toFixed(2)))
        setLeftRobotLock(false)
        //End backward movement cycle        
        setBackwardMovement(false)
        console.log("4")
      }
    }

  };


  const handleClick = () => {
    arenaRef.current.focus();
  };

  return (
    <div onKeyUp={handleKeyUp} ref={arenaRef} style={{ display: "flex" }}>
      {/* <p><strong>LeftX-{leftRobotX}, MiddleX-{middleRobotX}, RightX-{rightRobotX}</strong></p>
        <p><strong>{leftRobotLock?"Left Extend-false":"Left Extend-true"}, {rightRobotLock?"Right Extend-false":"Right Extend-true"}</strong></p> */}
      <button onClick={handleClick} style={{ display: "flex", height: 20 }}>
        Play now
      </button>
      <div style={{ width: 80, height: 100, display: "flex" }}>
        <motion.img
          variants={svgVariants}
          initial="hidden"
          animate="leftVisible"
          src={microrobot1}
        />
        <motion.img
          variants={svgVariants}
          initial="hidden"
          animate="middleVisible"
          src={microrobot2}
        />
        <motion.img
          variants={svgVariants}
          initial="hidden"
          animate="rightVisible"
          src={microrobot3}
        />
      </div>
      <Background pos={leftRobotX} streamEnd={props.streamEnd} />
    </div>
  );
}

// up arrow releases locks
// space bar for final movement

export default Microrobot;
