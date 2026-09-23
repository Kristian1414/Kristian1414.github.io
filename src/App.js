import React from "react";
import { MotionConfig } from "framer-motion";
import Home from "./components/Home.js";
import "./style/global.css";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Home />
    </MotionConfig>
  );
}

export default App;
