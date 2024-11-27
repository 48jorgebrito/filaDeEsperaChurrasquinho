import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import PainelCliente from '../pages/painelFrontal/PainelCliente'
import PainelAdm from "../pages/painelAdm/painelAdm"
export default function AppRouter(){
    return(
        <Router>
        <Routes>
            <Route path='/' element={<PainelAdm/>}/>
            <Route path='/painel-cliente' element={<PainelCliente/>}/>
        </Routes>      
      </Router>
    )
}