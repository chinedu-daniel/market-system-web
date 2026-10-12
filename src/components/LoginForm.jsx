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
        <div>
            <h2>MMS Login</h2>
            <p>Sign in to your Market Management System.</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login-email">Email</label>

                    <input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="login-password">Password</label>

                    <input
                        id="login-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
};

export default LoginForm;