import { Link, useLocation } from 'react-router-dom'
import './MenuLink.css'

const MenuLink = (props) => {
    const localizacao = useLocation()
    console.log(l)
    return (
        <Link className={`link ${localizacao.pathname === props.to ? 'linkDestacado' : ''}`} to={props.to}>{props.conteudo}</Link>
    )
}

export default MenuLink