import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    let newEnter = text.toLowerCase();
    setText(newText);
  };
  const handleLowCase = () => {
    console.log("Lowercase");
    let newEnter = text.toLowerCase();
    setText(newEnter);
  };
  const handleClearCase = () => {
    console.log("Lowercase");
    let newEnter = "";
    setText(newEnter);
  };
  const handlleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter your text");
  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handlleOnChange}
        ></textarea>
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

      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
