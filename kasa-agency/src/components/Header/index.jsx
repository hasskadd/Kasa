import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logoHeader from '../Assets/LOGO.png'
import { StyledLink } from '../../utils/styles/Atom'

const HomeLogo = styled.img`
height: 68px;
width: 210px;

`
const NavHeader = styled.header`
padding: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;
margin 0 90px;
max-width: 1240px;
`
const NavContainer = styled.nav`

width: 200px;
display:flex;
justify-content: flex-end;
gap: 40px;
`

function Header(){
    return(
        <NavHeader>
            <Link to='/'>
                <HomeLogo src={logoHeader}/>
            </Link>
            <NavContainer>
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/about'>A propos</StyledLink>
            </NavContainer>
        </NavHeader>
       

    )
}

export default Header
