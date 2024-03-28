import { Outlet } from "react-router-dom"
import Menu from "../../Componentes/Menu"

const PaginaPadrao = () =>{
    return(
        <main>
            <Menu></Menu>
            <Outlet/>
        </main>

    )
}

export default PaginaPadrao