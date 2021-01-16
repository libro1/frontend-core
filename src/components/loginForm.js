import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const initialForm = {
  email: "",
  password: "",
};

function LoginForm() {
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
    alert("tes");
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
        <Button disabled={isFormEmpty} type="submit" color="primary" variant="contained">
          Iniciar sesión
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
