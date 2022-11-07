import styed from 'styled-components'
import logoFooter from '../Assets/logoFooter.png'

const FooterContainer = styed.footer`
background: #000000;
`
const FooterTitle = styed.p`
color: #FFFFFF;
`
const FooterLogo  = styed.img`
width:122px;
height: 39px;
`
const ContainerStyle = styed.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`

function Footer(){
    return(
        <FooterContainer>
            <ContainerStyle>
                <FooterLogo src={logoFooter}/>
                <FooterTitle>© 2020 Kasa. All rights reserved</FooterTitle>
            </ContainerStyle>
        </FooterContainer>
    )
}

export default Footer