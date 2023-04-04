import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(false);
  return (
    <Container>
      <Typography variant="h4" color={"red"} align="center" mt={4}>
        Text Field
      </Typography>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        required
        error={error}
        helperText={error && "Incorrect email form"}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="filled"
        placeholder="Enter Your Password"
        fullWidth
        margin="normal"
      />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  );
};

export default TextFieldComp;
