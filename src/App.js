import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="E-Commerce" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Form heading="Enter your text" />
      </div>
      <About />
    </>
  );
}

export default App;
