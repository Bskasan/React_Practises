import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";


const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      <h1>Card</h1>
      {data.map((item) => <Card />)}
    </div>
  );
};

export default Main;
