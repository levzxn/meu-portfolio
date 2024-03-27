import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";


function AppRoutes() {
  return(
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}/>
        <Route path="/sobremim" element={<SobreMim></SobreMim>}></Route>
        <Route path="*" element={
          <div>Página não encontrada</div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
