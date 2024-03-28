import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import PaginaPadrao from "./Paginas/PaginaPadrao";
import PaginaProjeto from "./Paginas/PaginaProjeto";


function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
          <Route index element={<Inicio></Inicio>}></Route>
          <Route path="/sobremim" element={<SobreMim></SobreMim>}></Route>
          <Route path="/projetos/:nome" element={<PaginaProjeto></PaginaProjeto>}></Route>
        </Route>
        <Route path="*" element={
          <div>Página não encontrada</div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
