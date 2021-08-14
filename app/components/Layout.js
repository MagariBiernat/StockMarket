import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "./SEO"

const Layout = ({ children, pageMeta }) => {
  return (
    <Wrapper>
      <SEO title={pageMeta?.title} description={pageMeta?.description} />
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
    font-family: Play, sans-serif;
  }
`

export default Layout
