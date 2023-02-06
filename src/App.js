import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [move, setMove] = useState(false);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") setMove(!move);
  });

  return (
    <div className="App">
      <motion.div
        className="circle"
        tabIndex={0}
        animate={{ x: move ? 300 : 0 }}
        transition={{ type: "tween", duration: 5 }}
      ></motion.div>
    </div>
  );
}

export default App;
