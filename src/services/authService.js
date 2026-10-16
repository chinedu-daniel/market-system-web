const API_URL = "http://localhost:5000/api";

export async function loginUser(email, password) {
    const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            email,
            password
        }),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.message || "Login failed. Please check your credentials."
        );
    }

    const accessToken = result?.data?.accessToken;

    if (!accessToken) {
        throw new Error("The server did not return an access token.");
    }

    return {
        user: result.data.user,
        accessToken,
    };
}