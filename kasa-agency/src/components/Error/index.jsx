import styled from 'styled-components'
import { StyledErrorLink } from '../../utils/styles/Atom'
import colors from '../../utils/styles/colors'


const MainContainer = styled.main`
margin 0 90px;
max-width: 1240px;
display: flex;
flex-direction: column;
align-items: center;
`
const TitleStyle = styled.h1`
font-size: 180px;
margin: 0;
color: ${colors.primaryOrange};
`
const Pstyle = styled.p`
color: ${colors.primaryOrange};
font-weight: 500;
font-size: 30px;
margin-bottom: 80px;
`


function Error(){
    return (
        <MainContainer>
            <TitleStyle>404</TitleStyle>
            <Pstyle>Oups! La page que vous demandez n'existe pas.</Pstyle>
            <StyledErrorLink to='/'>Retourner sur la page d’accueil</StyledErrorLink>
        </MainContainer>
    )
}

export default Error