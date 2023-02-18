//import logo from './logo.svg';
//import './App.css';
import Msg from "./components/Msg";

//? Props is the parameters in React and is object in RCT.js
function App() {
  return (
    <div>
      <h1> React js </h1>
      <Msg name="Canon" />
      <Msg name="John" />
      <Msg name="Micheal" />
    </div>
  );
}

export default App;
