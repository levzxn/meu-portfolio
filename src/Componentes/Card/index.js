import { Link } from "react-router-dom"
import './Card.css'


const Card = (props) =>{
    return(
        <div className="div_card">
        <Link to={props.to} class="card">
            <img className="card__img" src={props.imagem} alt="logo-imagem"/>
                <span class="card__footer">
                    <span>{props.nome}</span>
                    <span>{props.descricao}</span>
                </span>
        </Link>
    </div>
    )
}

export default Card