import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductCard from "./components/ProductCard";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [submittedProduct, setSubmittedProduct] = useState(null);

  function handleSubmit(event) {
    event.preventDefault()

    setSubmittedProduct({
      name: productName,
      price: Number(productPrice),
    })
  }

  return (
    <div className="app">
      <Header title="MMS Admin Dashboard" />

      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      <div className="app-body">
        {sidebarOpen && (
          <Sidebar
            title="MMS"
            dashboard="Dashboard"
            products="Inventory"
            customers="Customers"
            orders="Orders"
          />
        )}
        
        <MainContent
          title="Dashboard"
          text="Welcome to the Market Management System."
        >

          <div className="search-section">
            <label htmlFor="product-search">Search inventory: </label>

            <input 
              id="product-search"
              type="text" 
              placeholder="Enter a spare part name"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          {/* Add Product form */}
          <div className="add-product-section">
            <h3>Add New Product</h3>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="product-name">Product Name: </label>
                <input 
                  id="product-name"
                  type="text"
                  placeholder="e.g. Toyota Brake Pad"
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                />
              </div>
              <br />

              <div>
                <label htmlFor="product-price">Price (₦): </label>
                <input 
                  id="product-price"
                  type="number"
                  placeholder="e.g. 45000"
                  value={productPrice}
                  onChange={(event) => setProductPrice(event.target.value)}
                />
              </div>
              <br />

              <button type="submit">Add Product</button>
            </form>
          </div>

          {submittedProduct && (
            <div className="product-card">
              <div className="product-info">
                <span className="product-category">NEW PRODUCT</span>
                <h4>{submittedProduct.name}</h4>
                <p className="product-price">
                  ₦{submittedProduct.price.toLocaleString()}
                </p>
              </div>
            </div>
          )}

          {/* ProductCard  */}
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
