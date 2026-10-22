import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProducts() {
            try {
                const result = await getProducts();
                setProducts(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>
    }

    if (error) {
        return <p>Error loading products: {error}</p>
    }

    return (
        <main>
            <h1>Market Products</h1>
            <p>Browse available spare parts.</p>

            {products.map((product) => (
                <article key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description || "No description available"}</p>
                    <p>Price: ₦{Number(product.price).toLocaleString()}</p>
                    <p>Availabile quantity: {product.quantity}</p>
                </article>
            ))}
        </main>
    );
}

export default ProductsPage;