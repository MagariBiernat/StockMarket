import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children, navtheme, pageMeta }) => {
  const { theme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <Wrapper theme={theme}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.theme ? "red" : "blue")};
`

export default Layout
