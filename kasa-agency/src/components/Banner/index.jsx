import styled from 'styled-components'
import '../../utils/context/Main.css'

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
const Overlay = styled.div`
width: 100%;
height 100%;
background:#000;
opacity: .4;
position: absolute;
top:0;
`


function Banner(props){
    return(
        <BannerContainer>
            <HomeBanner src={props.imageBanner}/>
            <Overlay></Overlay>
            <h1 className='titleBanner'>{props.title}</h1>
        </BannerContainer>
    )
}

export default Banner