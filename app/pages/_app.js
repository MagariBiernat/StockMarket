import React, { useEffect } from "react";

import jwtDecode from "jwt-decode";

export default function _app({ Component, pageProps }) {
  useEffect(() => {
    const token = localStorage.getItem("storedToken") || null;
    if (token) {
      const decoded = jwtDecode(token);

      console.log(decoded);

      if (Date.now() > decoded?.exp * 1000) {
        console.log("supcio");
      }
    }
  });
  return <Component {...pageProps} />;
}
