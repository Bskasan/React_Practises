//import logo from './logo.svg';
//import './App.css';

import Content from "./components/Content";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

//* This is App Component, as we know react is component-based.
function App() {
  return (
    //* JSX ( JavaScript and XML )
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
