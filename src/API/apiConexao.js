import { url } from "./apiConfig"

const getRepositorios = async () => {
    const conexao = await fetch(url)
    const dados = conexao.json()
    return dados
}

const getReadMe = async (nomeRepositorio) => {
    try{
        const conexao = await fetch(`https://api.github.com/repos/levzxn/${nomeRepositorio}/readme`)
        const dados = await conexao.json()
        const readMeBase64 = dados.content
        const readMe = atob(readMeBase64)
        return readMe
    }
    catch(error){
        return <><h1>Página não encontrada</h1></>
    }
}


export { getRepositorios, getReadMe }