function MainContent({ title, text, children }) {
    return(
        <main className="main-content">
            <div className="page-intro">
                <p className="eyebrow">OVERVIEW</p>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>


            {children}
        </main>
    )
}

export default MainContent;