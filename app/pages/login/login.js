import React, { useEffect, useState } from "react";

import axios from "axios";

const SECRET_KEY =
  "f51173edb96636075ae6ff028a25e647583cb8dc40cf38f78a7287d3987d6a78e8f5e940932d7933607ca0a1099e1faa97eff60e73a355b469fa62493ecb8e46";

const LoginForm = () => {
  const [value, setValue] = useState({});
  const [token, setToken] = useState({});

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    localStorage.setItem("storedToken", SECRET_KEY);
  });

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
