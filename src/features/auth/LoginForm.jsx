import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {

    const { login } = useAuth();

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
            await login(email, password);


            setEmail("");
            setPassword("");

            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
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