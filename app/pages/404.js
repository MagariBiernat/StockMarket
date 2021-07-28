import React from "react"

const Custom404 = () => {
  return (
    <div>
      <h1>Error 404 - Page Not Found</h1>
      <button onClick={() => (window.location.href = "/")}>
        Go back to main page
      </button>
    </div>
  )
}

export default Custom404
