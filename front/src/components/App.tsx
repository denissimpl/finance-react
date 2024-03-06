

import Header from "./Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Actions from "./Actions/Actions";
import Charts from "./Charts/Charts";
import Form from "./Form/Form";



const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/login" element={<Form />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </BrowserRouter>
        
    
  )
}

export default App
