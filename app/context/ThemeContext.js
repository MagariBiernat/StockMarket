import React, { useEffect, useState, createContext } from "react"

export const ThemeContext = createContext()

function useTheme() {
  if (typeof window !== "undefined") {
    const storageName = "themeStockMarket"
    const storageThemeState = localStorage.getItem(storageName)
      ? localStorage.getItem(storageName)
      : false

    const [theme, setTheme] = useState(
      storageThemeState == "true" ? true : false
    )

    const changeTheme = () => {
      setTheme(!theme)
      localStorage.setItem(storageName, !theme)
    }

    return [theme, changeTheme]
  } else {
    return [null, null]
  }
}

export default function Provider({ children }) {
  const [theme, setTheme] = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
