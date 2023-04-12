import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  //TODO - Read user information from global state
  const user = true;

  const handleLogout = () => {
    //TODO - Delete the global user state
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Clarusway News
          </Typography>
          {user && (
            <Button color="inherit" onClick={handleLogout}>
              Log out
            </Button>
          )}
          {!user && <Button color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
