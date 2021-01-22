import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";

const initialForm = {
  email: "",
  password: "",
};

function LoginForm({ submitForm, isLoading }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    submitForm(form.email, form.password);
  };

  const isFormEmpty = form.password === "" || form.email === "";

  return (
    <>
      <form className="centerContent" onSubmit={handeSubmit}>
        <TextField
          label="Email"
          placeholder="user@mail.com"
          variant="outlined"
          style={{ width: "20rem" }}
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <TextField
          label="Password"
          placeholder="******"
          type="password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          value={form.password}
        />

        <div className="centerContent">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              disabled={isFormEmpty}
              type="submit"
              color="primary"
              variant="contained"
            >
              Iniciar sesión
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default LoginForm;
