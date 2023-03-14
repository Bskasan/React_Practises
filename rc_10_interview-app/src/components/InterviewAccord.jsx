import React from "react";

const InterviewAccord = (props) => {
  const { data } = props;
  console.log("data", data);
  return (
    <div className="row">
      {data.map((item) => {
        const { id, question, answer } = item;
        
      })}
    </div>
  );
};

export default InterviewAccord;
