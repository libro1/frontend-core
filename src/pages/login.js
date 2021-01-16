import React from "react";
import { Box } from "@material-ui/core";

import LoginForm from "../components/loginForm";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div>
      <Box className="centerContent" m={8}>
        <img src={logo} alt="logo" width="250 rem" />
      </Box>
      <LoginForm />
    </div>
  );
}

export default Login;
