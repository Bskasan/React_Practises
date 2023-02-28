import React, { useState } from "react";

const MouseEvent = () => {
  //? let visible = false;

  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const handleDoubleClick = (e) => {
    console.log(e);
    setToggle(!toggle);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      >
        todo item 1
      </div>

      {/* Conditional Rendering */}
      {visible && <div>Mouse Events</div>}

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>

      <p>X and Y</p>

      <p className="text-danger fw-bold">
        {"X"}
        {"Y"}
      </p>
    </div>
  );
};

export default MouseEvent;
