import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logoHeader from '../Assets/LOGO.png'

const HomeLogo = styled.img`
height: 68px;
width: 210.32px;

`
const NavHeader = styled.header`
padding: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`
const NavContainer = styled.nav`

`

function Header(){
    return(
        <NavHeader>
            <Link to='/'>
                <HomeLogo src={logoHeader}/>
            </Link>
            <NavContainer>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A propos</Link>
            </NavContainer>
        </NavHeader>
       

    )
}

export default Header
