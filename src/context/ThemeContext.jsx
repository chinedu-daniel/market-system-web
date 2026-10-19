import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("mms-theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("mms-theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) => 
            currentTheme === "light" ? "dark" : "light"
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

