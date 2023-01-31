import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import New from "./components/New";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray ";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="E-Commerce" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Form heading="Enter your text" mode={mode} showAlert={showAlert} />
      </div>
      <About />
      <New />
    </>
  );
}

export default App;
