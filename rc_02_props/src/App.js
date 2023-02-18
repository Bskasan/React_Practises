//import logo from './logo.svg';
//import './App.css';

import Person from "./components/Person";

//? Props is the parameters in React and is object in RCT.js
function App() {
  return (
    <div>
      <h1> React js </h1>
      <Person
        name="Jonathan Klaus"
        img="https://media.istockphoto.com/id/1433419992/fi/valokuva/nuori-mies-rennossa-sinisess%C3%A4-paidassa-ja-lasissa-pitelem%C3%A4ss%C3%A4-puhelinta-katsomassa-kameraa.jpg?s=612x612&w=0&k=20&c=Y8JQUnqTEMG1Yn83crSfFO7rzI40MGb69dDJhb-WjFU="
        tel="+49 233 44 55"
      />
      <Person
        name="Josh Steven"
        img="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_960_720.jpg"
        tel="+49 233 44 55"
      />
      <Person
        name="Emily Lerk"
        img="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=bHXqxhYseYfmPLqYPOAbfGlv1Ye8d9KeUraRzad5XCg="
        tel="+49 233 44 55"
      />
    </div>
  );
}

export default App;
