const API_URL = "http://localhost:5000/api";

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch products.");
    }

    return response.json();
}

export  async function getProductById(id) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch product details");
    } 

    const result = await response.json();
    return result;
}