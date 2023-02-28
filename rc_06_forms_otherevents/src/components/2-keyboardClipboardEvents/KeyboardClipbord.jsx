import React, { useState } from "react";

const KeyboardClipbord = () => {
  const [inputData, setInputData] = useState("");

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
      />

      <p className="text-start mt-4 fs-3">{inputData.toUpperCase()}</p>

      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default KeyboardClipbord;
