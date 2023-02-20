import Button from "../button/Button";
import "./Card.css";

const Card = ({ lang, img, btn }) => {
  return (
    <div>
      <h1>{lang}</h1>
      <img src={img} alt="img" />
      <Button btn={btn}/>
    </div>
  );
};

export default Card;
