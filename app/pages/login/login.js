import React, { useState } from "react";

import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail({ [e.target.name]: e.target.value });
  };

  const handleChangePassword = (e) => {
    setPassword({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={handleChangeEmail}
          type="email"
          name="email"
          placeholder="email"
        />
      </div>
      <div>
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
