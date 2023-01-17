import "./App.css";
import Microrobot from "./Components/Microrobot/Microrobot";
import Background from "./Components/Background/background";
import BackgroundStream from "./Images/back-04.svg";
import { useEffect, useState } from "react";

function App() {
  const [focus, setFocus] = useState(false);
  const [streamEnd, setStreamEnd] = useState(0);

  const detectStreamEdges = () => {
    let rect = document.getElementById('backgroundStream').getBoundingClientRect();
    // console.log(rect['right'])
    setStreamEnd(rect['right'])
    // for (const key in rect) {
    //   if (typeof rect[key] !== 'function') {
    //     console.log( `${key} : ${rect[key]}`);
    //     if(key=='right'){
    //       setStreamEnd(rect[ke])
    //     }
    //   }
    // }
  };
  useEffect(()=>{
    detectStreamEdges();
  });

  return (
    <div className="App">
      <div className="arena">
        <img
          id="backgroundStream"
          src={BackgroundStream}
          alt="Background Stream"
          className="backgroundStream"
        />
        <div className="characters">
          <Microrobot focus={focus} streamEnd={streamEnd}/>{console.log(streamEnd)}
        </div>
      </div>
    </div>
  );
}

export default App;
