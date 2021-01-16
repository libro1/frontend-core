import React, { useState } from "react";
import { Box } from "@material-ui/core";

import LoginForm from "../components/loginForm";
import sessionService from "../services/login";

import logo from "../assets/logo.png";

function Login() {
  const [loading, setIsLoading] = useState(false);

  const submitForm = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await sessionService.login(email, password);
      console.log("sipa")
      console.log(res)
    } catch (e) {
      console.log("no pa")
      debugger
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Box className="centerContent" m={8}>
        <img src={logo} alt="logo" width="250 rem" />
      </Box>
      <LoginForm loading={loading} submitForm={submitForm} />
    </div>
  );
}

export default Login;
