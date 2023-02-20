import "./Button.css";

const Button = ({ btn }) => {
  return (
    <div className="title">
      <button className="btn-blue">{btn}</button>
    </div>
  );
};

export default Button;
