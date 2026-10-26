import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import "./ProductsPage.css";
import StorefrontNavbar from "../../components/StorefrontNavbar/StorefrontNavbar";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const result = await getProducts();
        setProducts(result.data);
        console.log("Products received:", result.data);
        console.log("Toyota Camry:", result.data.find(
          (product) => product.id === 29
        ));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <>
        <StorefrontNavbar />

        <main className="products-page">
            <section className="products-grid">
                {products.map((product) => (
                    <article className="product-card" key={product.id}>
                        <div className="product-image">
                            {product.imageUrl ? (
                              <img src={product.imageUrl} alt={product.name} />
                            ) : (
                              <span>No image available</span>
                            )}
                        </div>

                        <div className="products-card-content">
                            <h2>{product.name}</h2>
                            <p className="product-description">
                                {product.description || "No description available"}
                            </p>

                            <p className="product-price">
                                Price: ₦{Number(product.price).toLocaleString()}
                            </p>

                            <p className="product-quantity">
                                Availabile quantity: {product.quantity}
                            </p>

                            <Link 
                              to={`/products/${product.id}`}
                              className="view-details-button"
                            >
                              View details
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    </>
  );
}

export default ProductsPage;
