import React, { Children, createContext } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

//? export const {Provider} = createContext();
export const AuthContext = createContext();

//* with custom hook
// export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  const values = {
    createUser,
    signIn,
    logOut,
    currentUser: { displayName: "felix franko" },
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
