import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>THIS IS ABOUT PAGE</h1>
      <p>
        Passionate Software developer (Front-end Developer)with over 3 years in
        the industry, including 1+ years of professional experience. Skilled in
        game development using Unity and C#, with a strong understanding of
        object-oriented programming, data structures, and the software
        development lifecycle. Recently pivoted to front-end web development,
        mastering HTML, CSS, JavaScript, and React. Ready to bring my passion
        and skills to a new challenge as a front-end web developer.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        ...Go to Home Page...
      </button>
    </div>
  );
};

export default About;
