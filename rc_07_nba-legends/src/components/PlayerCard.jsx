import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImg, setShowImg] = useState(true);

  //const { name, img, statistics } = props;

  return (
    <Card
      onClick={() => setShowImg(!showImg)}
      className="rounded-2 m-auto player-card"
      role="button"
    >
      {showImg ? (
        <Card.Img className="player-img" variant="top" src={img} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h5 text-start list-unstyled">
                🏀 {item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
