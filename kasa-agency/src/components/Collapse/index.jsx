import { useState } from "react";
import styled from 'styled-components'
import arrawB from '../Assets/arrowBas.png'
import arrawH from '../Assets/arrawHaut.png'


const ArrowImg = styled.img`
width: 14px;
height: 20px;
margin-left: auto;
`
const ButtonStyle = styled.button`
background : #FF6060;
width: 100%;
border: unset;
display:flex;
padding 10px 20px;
border-radius: 5px;
position:relative;
color: #FFFFFF;
font-size: 16px;
`
const ContentDivStyle = styled.div`
margin-top: -10px;
background: #F7F7F7;
padding 20px 20px;
border-radius: 5px;
color: #FF6060;
`
const ContainerDiv = styled.div`
position: relative;

`




function Collapsible(props){
    const [isOpen, setisOpen] = useState(false)
    return(
        <ContainerDiv>
            <ButtonStyle onClick={(()=>setisOpen(!isOpen))}>{props.title} {isOpen ? <ArrowImg src={arrawH}/>: <ArrowImg src={arrawB}/>}</ButtonStyle>
            {isOpen && <ContentDivStyle>{props.children}</ContentDivStyle>}
            
        </ContainerDiv>
    )
}
export default Collapsible

