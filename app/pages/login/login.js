import React, { useEffect, useState } from "react"

import axios from "axios"
import { useDispatch } from "react-redux"
import { AUTH_LOGIN } from "../../redux/types"
import jwtDecode from "jwt-decode"

const LoginForm = () => {
  const [value, setValue] = useState({})
  const dispatch = useDispatch()

  const handleChangeValues = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  console.log(value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      email: value.email,
      password: value.password,
    }

    axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          const { token } = res.data
          localStorage.setItem("storedToken", token)
          const decoded = jwtDecode(token)
          dispatch({ type: AUTH_LOGIN, payload: { email: decoded.email } })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
  )
}

export default LoginForm
