import React, { useEffect, useState } from "react";

import axios from "axios";

const LoginForm = () => {
  const [value, setValue] = useState({});

  const handleChangeValues = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: value.email,
      password: value.password,
    };

    axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        localStorage.setItem("storedToken", res.data.token);
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
          onChange={handleChangeValues}
          type="email"
          name="email"
          placeholder="email"
        />
      </div>
      <div>
        <input
          onChange={handleChangeValues}
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
