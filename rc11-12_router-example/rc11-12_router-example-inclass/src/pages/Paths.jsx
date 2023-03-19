import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Paths = () => {
  const { state } = useLocation();
  const { id } = useParams();

  console.log(state, id);

  return <div>Paths</div>;
};

export default Paths;
