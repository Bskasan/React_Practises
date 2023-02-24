import "./Main.scss";
import { data } from "../../helpers/data";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      <h1>Card</h1>
      {data.map((item) => {
        return (
          <div className="card">
            {item.title}
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
