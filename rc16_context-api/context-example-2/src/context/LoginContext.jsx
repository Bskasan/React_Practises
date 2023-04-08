import { useContext } from "react";
import { createContext } from "react";

//! 1) Creating Context
export const LoginContext = createContext();

//! 2) Provider

const LoginProvider = ({ children }) => {
  //props.children

  const { user, setUser } = useContext(LoginContext);

  const values = { user, setUser };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! 3) Consuming (Custom Hook)
export const useLoginContext = () => {
  return useContext(LoginContext);
};

//? Usage of custom hook
//! const {user} = useLoginContext();

export default LoginProvider;
