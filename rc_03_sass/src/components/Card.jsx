import React from "react";

import CardStyle from "../scss/card.module.scss";

//! Data is js document --> Curly Braces.
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        //! Destructuring...
        const { id, img, comment, job, name } = item;
        return (
          <div key={id} className={CardStyle.card}>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{comment}</p>
            <img src={img} alt={name} />
            <div className={CardStyle.buttons}>
              <button className={CardStyle["btn-small"]}>Small</button>
              <button className={CardStyle["btn-large"]}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
