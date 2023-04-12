import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //TODO - Read user information from global state
  //? const user = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  const handleLogout = () => {
    //TODO - Delete the global user state
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            WORLD NEWS
          </Typography>
          {user?.email && user.password && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
          {!user?.email && (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
