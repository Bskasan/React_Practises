import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //* GET USER INFORMATION FROM GLOBAL STATE
  const { user } = useSelector((state) => state.auth);

  //! ? -> Optional chaining
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
