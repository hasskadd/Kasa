import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logoHeader from '../Assets/LOGO.png'
import { StyledLink } from '../../utils/styles/Atom'
import '../../utils/context/Main.css'


const HomeLogo = styled.img`
height: 60px;
width: 160px;

`


function Header(){
    return(
        <header className='NavHeader'>
            <Link to='/'>
                <HomeLogo src={logoHeader}/>
            </Link>
            <nav className='NavContainer'>
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/about'>A propos</StyledLink>
            </nav>
        </header>
       

    )
}

export default Header
