import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, pageMeta }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  }
`

export default Layout
