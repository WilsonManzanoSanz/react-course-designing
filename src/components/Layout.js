import React, { useContext, } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext"; 

function Layout({defaultTheme, children}){
    return (<ThemeProvider defaultTheme={defaultTheme}>
                <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
            </ThemeProvider>
    );
}

function LayoutNoThemeProvider({children}){
    const { theme } = useContext(ThemeContext);
    return (
        <div className={ theme === "light" ? "container-fluid light" : "container-fluid dark" }>
            {children}
        </div>
    );
}

export default Layout;