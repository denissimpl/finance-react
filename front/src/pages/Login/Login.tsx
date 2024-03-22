import AuthForm from "../../components/AuthForm/AuthForm";

const Login = () => {
    return (
        <AuthForm isLogin={true} text={{button: "Войти", header: "Авторизация"}} />
    )
}

export default Login