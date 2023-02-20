import Button from "../button/Button";
import "./Card.css";

const Card = ({ lang, img, btn }) => {
  return (
    <div>
      <h1 className="title">{lang}</h1>
      <img className="images" src={img} alt="img" />
      <Button btn={btn} />
    </div>
  );
};

export default Card;
