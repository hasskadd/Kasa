import imageBanner from '../Assets/imageBanner.png'
import styled from 'styled-components'
//import colors from '../../utils/styles/colors'

const HomeBanner = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`
const BannerContainer = styled.div`
height: 180px;
position: relative;
background: red;
margin-bottom: 30px;
border-radius: 25px;
overflow: hidden;
`

const BannerTitle = styled.h1`
position: absolute;
color: #FFFFFF;
font-style: normal;
top:50%;
left:50%;
transform: translate(-50%, -50%);
margin: 0;
`
const Overlay = styled.div`
width: 100%;
height 100%;
background:#000;
opacity: .4;
position: absolute;
top:0;
`


function Banner(){
    return(
        <BannerContainer>
            <HomeBanner src={imageBanner}/>
            <Overlay></Overlay>
            <BannerTitle>Chez vous, partout  et ailleurs</BannerTitle>
        </BannerContainer>
    )
}

export default Banner