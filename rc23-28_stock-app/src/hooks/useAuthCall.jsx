import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchStart } from "../features/authSlice";

const useAuthCall = () => {
  const login = async (userInfo) => {
    const dispatch = useDispatch();
    const BASE_URL = "https://12177.fullstack.clarusway.com/";

    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCall;
