import { useParams } from "react-router-dom"
import { getReadMe } from "../../API/apiConexao"
import { useEffect, useState } from "react"
const PaginaProjeto = () => {
    const [descricao, setDescricao] = useState('')

    const parametro = useParams()

    useEffect(() => {
        const preencheReadMe = async () => {
            try {
                const readMe = await getReadMe(parametro.nome)
                setDescricao(readMe)
            }
            catch(error){
                return 
            }
        }
        preencheReadMe()
    }, [])

    return <h1>{descricao}</h1>
}

export default PaginaProjeto