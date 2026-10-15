import LoginForm from "../features/auth/LoginForm"

function LoginPage({ onLoginSuccess}) {
    return <LoginForm onLoginSuccess={onLoginSuccess}/>;
}

export default LoginPage;
