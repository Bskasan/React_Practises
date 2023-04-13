import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    const BASE_URL = "https://12177.fullstack.clarusway.com/";

    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCall;
