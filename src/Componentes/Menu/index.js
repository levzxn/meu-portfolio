import MenuLink from '../MenuLink'
import './Menu.css'


const Menu = () => {
    return (
        <header>
            <nav className='navegacao'>
                <MenuLink to='/' conteudo='Início'></MenuLink>
                <MenuLink to='/sobremim' conteudo='Sobre Mim'></MenuLink>
            </nav>
        </header>
    )
}

export default Menu