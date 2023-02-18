//import logo from './logo.svg';
//import './App.css';

import Person from "./components/Person";
import { data } from "./data";

//? Props is the parameters in React and is object in RCT.js
function App() {
  return (
    <div>
      {data.map((item) => (
        <Person name={item.name} img={item.img} tel={item.tel}/>
      ))}
    </div>
  );
}

export default App;

// <Person
//     name="Emily Kurnikov"
//     img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
//     tel="+49 233 44 55"
//   />
//   <Person
//     name="Josh Steven"
//     img="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
//     tel="+49 233 44 55"
//   />
//   <Person
//     name="Sumany Kirinihni"
//     img="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
//     tel="+49 233 44 55"
//   />
