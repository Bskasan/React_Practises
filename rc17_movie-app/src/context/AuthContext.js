import React, { Children, createContext } from "react";

//? export const {Provider} = createContext();
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const values = {};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
