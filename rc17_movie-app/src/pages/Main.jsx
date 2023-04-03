import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Main = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {movies.map((movie) => console.log(movie))}
      </div>
    </div>
  );
};

export default Main;
