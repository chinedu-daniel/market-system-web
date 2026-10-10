function ProductCard({ name, price }) {
    return(
        <div className="product-card">
            <div className="product-icon">
                {name.charAt(0)}
            </div>

            <div className="product-info">
                <span className="product-category">SPARE PART</span>

                <h4>{name}</h4>

                <p className="product-price">
                    ₦{price.toLocaleString()}
                </p>

                <span className="stock-status">
                    ● In stock
                </span>
            </div>
        </div>
    )
}

export default ProductCard;