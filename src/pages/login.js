import React, { useState, useContext } from "react";
import { Box, Container } from "@material-ui/core";

import { UserContext } from "../context/userContext";
import LoginForm from "../components/loginForm";
import ShowErros from "../components/showErrors";
import sessionService from "../services/sessionService";

import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";

function Login() {
  const [loading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const { setUser } = useContext(UserContext);

  const submitForm = async (email, password) => {
    setIsLoading(true);
    try {
      setHasError(false);
      const res = await sessionService.login(email, password);
      setIsLoading(false);
      setUser(res);
      history.push("/home");
    } catch (e) {
      setHasError(true);
      setIsLoading(false);
      if (!e.response) {
        setErrors([
          {
            msg:
              "Error en la conexion con el servidor, intente nuevamente mas tarde",
          },
        ]);
        return;
      }
      setErrors(e.response.data.errors);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box className="centerContent" m={5}>
        <img src={logo} alt="logo" width="250 rem" />
      </Box>
      {hasError && <ShowErros list={errors} />}
      <LoginForm isLoading={loading} submitForm={submitForm} />
    </Container>
  );
}

export default Login;
