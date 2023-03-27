import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../styles/Global.styles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}

        <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
