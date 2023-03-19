import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";

//? Bu kisim gercekte Global State'lerde tutulur. (Context API, Redux, Mobx --> Global State Management Libraries)
//! Link -> https://blog.openreplay.com/top-6-react-state-management-libraries-for-2022/
//! const isSigned = userContext(jwt);

const isSigned = true;

const PrivateRouter = () => {
  return <div> {isSigned ? <Outlet /> : <Login />}</div>;
};

export default PrivateRouter;
