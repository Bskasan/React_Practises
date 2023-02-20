import ButtonStyle from "./Button.module.css";

const Button = ({ btn }) => {
  return (
    <div className={ButtonStyle["title"]}>
      <button className={ButtonStyle["btn-blue"]}>{btn}</button>
    </div>
  );
};

export default Button;
