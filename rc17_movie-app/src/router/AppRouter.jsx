import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
