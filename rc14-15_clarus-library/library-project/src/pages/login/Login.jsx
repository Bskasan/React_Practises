import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("bekir");
    sessionStorage.setItem("user", "bekir");
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
