import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, pageMeta }) => {
  return (
    <Wrapper>
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

export default Layout
