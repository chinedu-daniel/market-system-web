import  { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Login form submitted");

        setEmail("");
        setPassword("");
    }

    return (
        <main className="login-page">
            <section className="login-brand">
                <div className="login-brand-mark">M</div>
                <p className="login-brand-name">MMS</p>
                <p className="login-brand-description">Market Management System</p>
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

                    <button className="login-submit" type="submit">
                        Sign In
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