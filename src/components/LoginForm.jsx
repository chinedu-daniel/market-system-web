import  { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h2>MMS Login</h2>
            <p>Sign in to your Market Management System.</p>

            <label htmlFor="login-email">Email</label>

            <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="login-password">Password</label>

            <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </div>
    )
};

export default LoginForm;