import { useTheme } from "../context/useTheme";

function Header({ title }) {
    const { theme, toggleTheme } = useTheme();
    console.log("Current theme:", theme);

    return (
        <header className="header">
            <div className="brand">
                <div className="brand-mark">M</div>

                <div>
                    <h1>{title}</h1>
                    <span>Market Operations</span>
                </div>
            </div>

            <div className="header-user">
                <button 
                    type="button"
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                    {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
                </button>
                <div className="status-dot"></div>
                <span>Admin</span>
            </div>
        </header>
    )
}

export default Header;