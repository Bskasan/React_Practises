import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
    //! Destructuring
    const { data } = await axios(BASE_URL);
    setTutorials(data);
  };

  console.log(tutorials);

  //? componentDidMount
  useEffect(() => {
    getTutorials();
  }, []);

  //getTutorials();

  return (
    <div>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </div>
  );
};

export default Home;
