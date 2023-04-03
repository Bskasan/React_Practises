import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main">
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
