import {useParams} from 'react-router-dom'
import logement from '../../components/Assets/logements.json'
//import Collapsible from '../../components/Collapse'
import styled  from 'styled-components'
import { useState } from 'react'
import arrowLeft from '../../components/Assets/arrowLeft.png'
import arrowRight from '../../components/Assets/arrowRight.png'

/*
const CollapseContainer = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin: 40px 90px;
`
*/
const ArrowStyleLeft = styled.img`
position absolute;
transform: translate(0, -50%);
top: 50%;
z-index: 30;
width: 70px;
`
const ArrowStyleRight = styled.img`
transform: translate(-100%, -50%);
top: 50%;
left: 100%;
z-index: 30;
position: absolute;
width: 70px;
`
const MainContainer = styled.main`
margin 0 90px;
max-width: 1240px;

`
const GalerieImageSlide = styled.img`
width: 100%;
object-fit: cover;
height: 100%;
`
const ImageDIv = styled.div`
height: 100%;
width: 100%;
position: absolute;
`
const BannerContainer = styled.div`
height: 380px;
width: 100%;
position:relative;
display:flex;
border-radius: 20px;
overflow:hidden;
margin-bottom: 50px;
`
const SpanNumber = styled.span`
position: absolute;
z-index: 32;
right: 50%;
top: 90%;
color:white;
`

const SubBannerContainer = styled.div`
display: flex;
justify-content: space-between;
`

function Lodging(){
    const {id} = useParams()
    const [current, setCurrent] = useState(0)
    const findLog = logement.find((loge) =>loge.id === id)
    const slideLength = findLog.pictures.length 
    const  nextSlide = () => {
        setCurrent(current === slideLength - 1 ? 0: current + 1)
    }
    const  prevSlide = () => {
        setCurrent(current === 0 ? slideLength -1 : current - 1)
    }
   return(
    <MainContainer>
        <BannerContainer>
            {slideLength > 1 && (<ArrowStyleLeft src={arrowLeft} onClick={prevSlide}/>)}
            {slideLength > 1 && (<ArrowStyleRight src={arrowRight} onClick= {nextSlide}/>)}
            <SpanNumber>{current + 1 }/{slideLength}</SpanNumber>
            {findLog.pictures.map((slide, index) =>(
                <ImageDIv key={`${slide.toString()}-${index}`}>  
                    {index === current && (<GalerieImageSlide src={slide}/>)}
                    
                </ImageDIv>
                
            ))}
        </BannerContainer>
        <SubBannerContainer>
            <div>
                <h1>{findLog.title}</h1>
                <p>{findLog.location}</p>
                {findLog.tags.map((tag, index) =>(
                    <div key={`${tag.toString()}-${index}`}>{tag}</div>    
                ))}
            </div>
            <div>
                <h2>{findLog.host.name}</h2>
                <div><img src={findLog.host.picture}/></div>
                
            </div>
        </SubBannerContainer>

       
         

    </MainContainer>
   )
   
}
export default Lodging
/*
<CollapseContainer>
            <Collapsible title = "Description">
                <p> {findLog.description}</p>
            </Collapsible>
            <Collapsible title = "Equipements">
                <p>{findLog.equipments}</p>
            </Collapsible>
</CollapseContainer> */