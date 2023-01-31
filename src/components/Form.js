import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowCase = () => {
    console.log("Lowercase");
    let newEnter = text.toLowerCase();
    setText(newEnter);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearCase = () => {
    console.log("Clear");
    let newEnter = "";
    setText(newEnter);
    props.showAlert("All text Clear", "success");
  };
  const handlleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter your text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handlleOnChange}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upperCase
      </button>
      <button className="btn btn-primary mx-5" onClick={handleLowCase}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearCase}>
        Clear
      </button>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
