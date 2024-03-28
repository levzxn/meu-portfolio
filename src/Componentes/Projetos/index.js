import { getRepositorios } from "../../API/apiConexao"
import { useEffect, useState } from "react"
import './Projetos.css'
import Card from "../Card"
import { listaImagens } from "./listaImagens"



const Projetos = () => {
    const [repositorios, setRepositorios] = useState([])
    
    useEffect(() => {
        const preencherSetRepositorios = async () => {
            try {
                const repos = await getRepositorios()
                setRepositorios(repos)
            } 
            catch (error) {
                console.error("Erro ao obter repositórios:", error)
            }
        }
        preencherSetRepositorios()
    }, [])


    return (
        <ul className='lista_projetos'>
            {repositorios.map((repositorio) => {
                return(
                    <li><Card to={`/projetos/${repositorio.name}`} nome={repositorio.name} imagem={listaImagens[repositorio.name]}></Card></li>
                ) 
            })}
        </ul>

    )
}

export default Projetos