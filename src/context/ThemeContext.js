import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

function ThemeProvider({defaultTheme, children}){
    const { theme, setTheme } = useTheme(defaultTheme);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };