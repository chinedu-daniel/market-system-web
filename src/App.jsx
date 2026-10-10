import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="app">
      <Header title="MMS Admin Dashboard" />

      <div className="app-body">
        <Sidebar
          title="MMS"
          dashboard="Dashboard"
          products="Inventory"
          customers="Customers"
          orders="Orders"
        />
        <MainContent
          title="Dashboard"
          text="Welcome to the Market Management System."
        >
          <div className="product-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">INVENTORY</p>
                <h3>Recent Products</h3>
              </div>

              <span className="product-count">2 products</span>
            </div>

            <div className="product-grid">
              <ProductCard name="Toyota Brake Pad" price={45000} />

              <ProductCard name="Honda Oil Filter" price={18000} />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
}
export default App;
