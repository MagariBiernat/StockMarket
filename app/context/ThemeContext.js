import React, { useEffect, useState, createContext } from "react"
import { lightMode, darkMode } from "../constants/ColorsModes"

export const ThemeContext = createContext()

function useTheme() {
  if (typeof window !== "undefined") {
    const storageName = "themeStockMarket"
    const storageThemeState = JSON.parse(localStorage.getItem(storageName))
      ? JSON.parse(localStorage.getItem(storageName))
      : darkMode

    const [theme, setTheme] = useState(storageThemeState)

    const changeTheme = () => {
      if (theme.name === lightMode.name) {
        setTheme(darkMode)
        localStorage.setItem(storageName, JSON.stringify(darkMode))
      } else {
        setTheme(lightMode)
        localStorage.setItem(storageName, JSON.stringify(lightMode))
      }
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
