import Header from "./Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import AlertWrapper from "./Alert/AlertWrapper";
import { Routing } from "./Routing/Routing";



const App = () => {
  const loading = useSelector((state: RootState) => state.loading.value)
  const logged = useSelector((state:RootState) => state.logged.value)
  const notification = useSelector((state: RootState) => state.notification)
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        {logged?
        Routing.auth.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element()} />
        }):
        Routing.guest.map((route, index) => {
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
