const API_URL = "http://localhost:5000/api";

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`, {
        method: "GET",
        // headers: {
        //     Authorization: `Bearer ${accessToken}`,
        // },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch products.");
    }

    return response.json();
}