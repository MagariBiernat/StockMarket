import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <nav>
      <button onClick={() => setTheme()}> change context</button>elo navbar
    </nav>
  )
}

export default Navbar
