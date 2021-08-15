import React, { useContext } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Link from "next/link"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <NavWrapper>
      <div className="leftSideNav">
        <p>Logo</p>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightSideNav">
        {isAuthenticated ? (
          <div>
            <Link href="/app">
              <a>Go to APP</a>
            </Link>
            <button>Log out</button>
          </div>
        ) : (
          <div>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link>
              <a>Register</a>
            </Link>
          </div>
        )}
        <button onClick={setTheme}> Change Theme</button>
      </div>
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  > div.leftSideNav {
    display: flex;

    > p {
      color: red;
    }

    > ul {
      display: flex;
      align-items: center;
      margin-left: 26px;
      > li {
        display: inline;
        list-style: none;
        margin-right: 16px;
        > a {
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: 2px;
          color: ${(props) => props.theme.fontColor};
        }
      }
    }
  }

  > div.rightSideNav {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
    }
  }
`
