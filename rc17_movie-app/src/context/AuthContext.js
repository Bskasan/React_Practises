import React, { Children, createContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

//? export const {Provider} = createContext();
export const AuthContext = createContext();

//* with custom hook
// export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };

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

const AuthContextProvider = ({ children }) => {
  const values = { currentUser: { displayName: "felix franko" } };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
