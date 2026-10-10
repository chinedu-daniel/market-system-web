function Header({ title }) {
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
                <div className="status-dot"></div>
                <span>Admin</span>
            </div>
        </header>
    )
}

export default Header;