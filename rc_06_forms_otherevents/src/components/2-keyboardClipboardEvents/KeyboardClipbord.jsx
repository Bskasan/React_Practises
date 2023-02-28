import React, { useState } from "react";

const KeyboardClipbord = () => {
  const [inputData, setInputData] = useState("");

  function handleKeyDown(e) {
    console.log(e.keyCode);

    //? To prevent number inputs
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please don't enter a number!!!");
      e.preventDefault();
    }
  }

  const handleAreaPast = (e) => {
    console.log(e);
    e.target.style.fontSize = "30px";
    e.target.style.border = "3px solid red";
    e.target.style.backgroundColor = "lightgrey";
    alert(`${e.target.value}`);
  };

  return (
    <div>
      <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>

      <input
        type="text"
        className="form-control p-3 fs-3"
        onChange={(e) => {
          //! Whatever you write, it will be uppercase.
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      <p className="text-start mt-4 fs-3">{inputData.toLowerCase()}</p>

      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        onPaste={handleAreaPast}
      ></textarea>
    </div>
  );
};

export default KeyboardClipbord;
