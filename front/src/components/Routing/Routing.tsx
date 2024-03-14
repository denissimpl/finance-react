import Actions from "../Pages/Actions";
import Charts from "../Pages/Charts";
import Main from "../Pages/Main";
import Guest from "../Pages/Guest";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



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
            <Login/>
        )
    },
    {
        path: "/register",
        element: () => (
            <Register/>
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