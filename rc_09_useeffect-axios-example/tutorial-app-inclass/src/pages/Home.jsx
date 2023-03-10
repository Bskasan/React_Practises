import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
    try {
      //! Destructuring
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log("Something went wrong!");
    }

    getTutorials();
  };

  console.log(tutorials);

  //? componentDidMount
  useEffect(() => {
    getTutorials();
  }, []);

  //getTutorials();

  return (
    <div>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} />
    </div>
  );
};

export default Home;
