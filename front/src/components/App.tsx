import Header from "./Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Actions from "./Actions/Actions";
import Charts from "./Charts/Charts";
import AuthForm from "./Form/AuthForm";
import Loader from "./Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import AlertWrapper from "./Alert/AlertWrapper";



const App = () => {
  const loading = useSelector((state: RootState) => state.loading.value)
  const notification = useSelector((state: RootState) => state.notification.value)
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/login" element={<AuthForm isLogin={true} callback={() => {}} text={{button: "Войти", header: "Авторизация"}} />} />
        <Route path="/register" element={<AuthForm isLogin={false} callback={() => {}} text={{button: "Зарегистрироваться", header: "Регистрация"}} />} />
      </Routes>
      {
        loading?
        <Loader></Loader>:
        null
      }
      {
        notification?
        <AlertWrapper value="success" text="Успешно" sx={{
                position: "fixed", 
                width: "100%",
                display: "flex",
                justifyContent: "center",
                bottom: 0
                }}/>:
        null
      }
      
      
    </BrowserRouter>
        
    
  )
}

export default App
