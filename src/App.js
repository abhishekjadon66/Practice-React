import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="E-Commerce" />
      <div className="container my-3">
        <Form heading="Enter your text" />
      </div>
      <About />
    </>
  );
}

export default App;
