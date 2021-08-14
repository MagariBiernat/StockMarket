import React from "react"
import Layout from "../components/Layout"
const Custom404 = () => {
  return (
    <Layout>
      <h1>Error 404 - Page Not Found</h1>
      <button onClick={() => (window.location.href = "/")}>
        Go back to main page
      </button>
    </Layout>
  )
}

export default Custom404
