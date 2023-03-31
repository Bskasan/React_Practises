import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
