import Actions from "../Actions/Actions";
import AuthForm from "../AuthForm/AuthForm";
import Charts from "../Charts/Charts";
import Main from "../Main/Main";
import Guest from '../Guest/Guest'



export const Routing = {
    auth: [{
        path: "/main",
        element: () => (
            <Main />
        )
    },
    {
        path: "*",
        element: () => (
            <Main />
        )
    },
    {
        path: "/actions",
        element: () => (
            <Actions />
        )
    },
    {
        path: "/charts",
        element: () => (
            <Charts />
        )
    },
    
],
    guest: [
        {
        path: "/login",
        element: () => (
            <AuthForm isLogin={true} text={{button: "Войти", header: "Авторизация"}} />
        )
    },
    {
        path: "/register",
        element: () => (
            <AuthForm isLogin={false} text={{button: "Зарегистрироваться", header: "Регистрация"}} />
        )
    },
    {
        path: "*",
        element: () => (
            <Guest/>
        )
    },
]
}