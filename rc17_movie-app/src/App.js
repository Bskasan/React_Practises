import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
