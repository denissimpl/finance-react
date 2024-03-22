import Actions from "../pages/Actions/Actions";
import Charts from "../pages/Charts/Charts";
import Main from "../pages/Main/Main";
import Guest from "../pages/Guest/Guest";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { IRoutes } from "../types/types";




export const Routing: IRoutes = {
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