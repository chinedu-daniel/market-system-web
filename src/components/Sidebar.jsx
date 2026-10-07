function Sidebar(props) {
  return (
    <aside>
        <h2>{props.title}</h2>

        <nav>
            <p>{props.dashboard}</p>
            <p>{props.products}</p>
            <p>{props.customers}</p>
            <p>{props.orders}</p>
        </nav>
    </aside>
  )
}

export default Sidebar;
