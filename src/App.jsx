import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpeedRead from "./pages/SpeedRead";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/speed-read" element={<SpeedRead />} />
      </Routes>
    </Router>
  );
}

export default App;
