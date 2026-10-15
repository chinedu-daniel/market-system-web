import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/api/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Login failed. Check your credentials."
                );
            }

            const accessToken = result?.data?.accessToken;

            if (!accessToken) {
                throw new Error("The server did not return an access token.");
            }

            // Temporary storage for our current learning step.
            sessionStorage.setItem("accessToken", accessToken);

            setEmail("");
            setPassword("");

            navigate("/dashboard");
        } catch (error) {
            setError(
                error.message || "Unable to connect to the server."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="login-page">
            <section className="login-brand">
                <div className="login-brand-mark">M</div>
                <p className="login-brand-name">MMS</p>
                <p className="login-brand-description">
                    Market Management System
                </p>
            </section>

            <section className="login-card">
                <div className="login-heading">
                    <p className="login-eyebrow">ACCOUNT ACCESS</p>
                    <h1>Welcome back</h1>
                    <p>Sign in to access your MMS workspace</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-field">
                        <label htmlFor="login-email">Email address</label>

                        <input
                            id="login-email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label htmlFor="login-password">Password</label>

                        <input
                            id="login-password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    {error && 
                        <p role="alert" className="login-error">
                            {error}
                        </p>
                    }

                    <button className="login-submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className="login-footer">
                    Secure access to your business workspace.
                </p>
            </section>
        </main>
        
    );
}

export default LoginForm;