import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logoHeader from '../Assets/LOGO.png'

const HomeLogo = styled.img`
height: 68px;
width: 210.32px;

`
const NavContainer = styled.nav`
padding: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`

function Header(){
    return(
        <NavContainer>
            <Link to='/'>
                <HomeLogo src={logoHeader}/>
            </Link>
            <div>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A propos</Link>
            </div>
        </NavContainer>
       

    )
}

export default Header
