import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Question = ({ id, question, answer }) => {
  //   console.log("item", props);

  const [show, setShow] = useState(false);

  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button>{arrowdown}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
