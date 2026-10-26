import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StorefrontNavbar from "../../components/StorefrontNavbar/StorefrontNavbar";
import { getProductById } from "../../services/productService";

function ProductDetailsPage() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProduct() {
            try {
                const result = await getProductById(id);
                setProduct(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);



    return (
        <>
            <StorefrontNavbar />

            <main className="product-details-page">
                {loading && <p>Loading product details...</p>}

                {error && <p>Error: {error}</p>}

                {!loading && !error && product && (
                    <article className="product-details-card">
                        <div className="product-details-image">
                            {product.imageUrl ? (
                                <img src={product.imageUrl} alt={product.name} />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                        
                        <h1>{product.name}</h1>
                        <p>{product.description || "No description available."}</p>
                        <p className="product-details-price">
                            ₦{Number(product.price).toLocaleString()}
                        </p>
                        <p>Availability quantity: {product.quantity}</p>
                    </article>
                )}
            </main>
        </>
    );
}

export default ProductDetailsPage;