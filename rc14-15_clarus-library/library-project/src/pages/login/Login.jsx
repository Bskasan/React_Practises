import React from "react";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm>
          <StyledInput type="text" placeholder="Username" />
          <StyledInput type="password" placeholder="Password" />
          <StyledButton type="submit" />
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
