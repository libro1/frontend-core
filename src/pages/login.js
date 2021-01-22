import React, { useState } from "react";
import { Box, Container } from "@material-ui/core";

import LoginForm from "../components/loginForm";
import ShowErros from "../components/showErrors";
import sessionService from "../services/sessionService";

import logo from "../assets/logo.png";

function Login() {
  const [loading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitForm = async (email, password) => {
    setIsLoading(true);
    try {
      setHasError(false);
      const res = await sessionService.login(email, password);
      console.log(res);
    } catch (e) {
      setHasError(true);
      console.log(e);
      if (!e.response) {
        setErrors([
          {
            msg:
              "Error en la conexion con el servidor, intente nuevamente mas tarde",
          }
        ]);
        return
      }
      setErrors(e.response.data.errors);
    }
    setIsLoading(false);
  };

  return (
    <Container maxWidth="xs">
      <Box className="centerContent" m={5}>
        <img src={logo} alt="logo" width="250 rem" />
      </Box>
      {hasError && <ShowErros list={errors} />}
      <LoginForm loading={loading} submitForm={submitForm} />
    </Container>
  );
}

export default Login;
