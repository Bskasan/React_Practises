import React from "react";
import Question from "./Question";

const InterviewAccord = (props) => {
  const { data } = props;
  console.log("data", data);
  return (
    <div className="row">
      {data.map((item) => {
        /*item -> To access each element in the array. */
        return <Question key={item.id} {...item} />;
      })}
    </div>
  );
};

export default InterviewAccord;
