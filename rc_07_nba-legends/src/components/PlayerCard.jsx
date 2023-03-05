import React from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  //const { name, img, statistics } = props;
  return (
    <Card className="rounded-2 m-auto player-card" role="button">
      <Card.Img className="player-img" variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
