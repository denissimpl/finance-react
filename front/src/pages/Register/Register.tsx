import AuthForm from "../../components/AuthForm/AuthForm";

const Register = () => {
    return (
        <AuthForm isLogin={false} text={{button: "Зарегистрироваться", header: "Регистрация"}} />
    )
}

export default Register