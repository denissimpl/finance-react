import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import type { RootState } from "./redux";
import AlertWrapper from "./components/Alert/AlertWrapper";

import type { IRoute } from "./types/types";
import {Routing} from "./routing/Routing";



const App = () => {

    const loading = useSelector((state: RootState) => state.loading.value)
    const logged = useSelector((state:RootState) => state.logged.value)
    const notification = useSelector((state: RootState) => state.notification)
    return (
    <BrowserRouter>
        <Header/>

        <Routes>
            {logged?
                Routing.auth.map((route: IRoute, index:number) => {
                    return <Route key={index} path={route.path} element={route.element()} />
                }):
                Routing.guest.map((route:IRoute, index:number) => {
                    return <Route key={index} path={route.path} element={route.element()} />
                })}
        </Routes>

        {
            loading?
                <Loader></Loader>:
                null
        }

        {
            notification.value?
                <AlertWrapper type={notification.type} text={notification.text} />:
                null
        }

    </BrowserRouter>
    )
}

export default App
