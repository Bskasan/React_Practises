import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import { GlobalStyles } from "../styles/Global.styles";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyles />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
