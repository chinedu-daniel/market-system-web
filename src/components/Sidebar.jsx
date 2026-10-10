function Sidebar({ title, dashboard, products, customers, orders }) {
  return (
    <aside className="sidebar">
        <div className="sidebar-brand">
          <h2>{title}</h2>
          <p>Management System</p>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">MAIN MENU</p>

          <a className="nav-item active">
            <span>▦</span>
            {dashboard}
          </a>

          <a className="nav-item">
            <span>▤</span>
            {products}
          </a>

          <a className="nav-item">
            <span>♙</span>
            {customers}
          </a>

          <a className="nav-item">
            <span>◫</span>
            {orders}
          </a>
        </nav>

        <div className="sidebar-footer">
          <p>Inventory &amp; Sales</p>
          <span>MMS MVP</span>
        </div>
    </aside>
  )
}

export default Sidebar;
