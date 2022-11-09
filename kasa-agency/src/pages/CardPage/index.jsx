import {useParams} from 'react-router-dom'
import logement from '../../components/Assets/logements.json'
import Collapsible from '../../components/Collapse'
import styled  from 'styled-components'
import { useState } from 'react'
import arrowLeft from '../../components/Assets/arrowLeft.png'
import arrowRight from '../../components/Assets/arrowRight.png'
import { StarsRating } from '../../components/starsRating'


const CollapseContainer = styled.div`
display: flex;
flex-direction: row;
gap: 46px;
margin-bottom: 30px;
`
const CollapseContainerSyledFlex = styled.div`
flex:1 50%
`

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
margin-bottom: 40px;
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
margin-bottom : 40px;
`
const StartRatingContainerGray = styled.div`
display: flex;
gap: 6px;
fill: #E3E3E3;
position:absolute;
`
const StartRatingContainerOrange = styled.div`
display: flex;
gap: 6px;
fill: #FF6060;
position:absolute;
` 
const RatingContainer = styled.div`
position: relative;
margin-top: 15px;
`
const ImageHostContainer = styled.div`
width: 64px;
height: 64px;
`
const ImageHostStyled = styled.img`
object-fit: cover;
border-radius: 50%;
width: 100%;
height: 100%
`
const HostContainer = styled.div`
display: flex;
color: #FF6060;
gap: 10px
`
const TagContainer = styled.div`
display:flex;
gap: 10px;
margin-top:10px;
`
const TagParagraphe = styled.p`
padding: 3px 21px;
border-radius: 10px;
background: #FF6060;
color: white
}
`
const TitleStyled = styled.h1`
margin: 0;
color: #FF6060;
`
const LocationStyle = styled.p`
margin: 0;
color: #FF6060;
`

function Lodging(){
    const {id} = useParams()
    const [current, setCurrent] = useState(0)
    const findLog = logement.find((loge) =>loge.id === id)
    const slideLength = findLog.pictures.length 
    const ratingLength = parseInt(findLog.rating)
    const starArray = [1, 2, 3, 4, 5]
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
                <TitleStyled>{findLog.title}</TitleStyled>
                <LocationStyle>{findLog.location}</LocationStyle>
                <TagContainer>
                    {findLog.tags.map((tag, index) =>(
                        <TagParagraphe key={`${tag.toString()}-${index}`}>{tag}</TagParagraphe>    
                    ))}
                </TagContainer>
  
            </div>
            <div>
                <HostContainer>
                    <h3>{findLog.host.name}</h3>
                    <ImageHostContainer><ImageHostStyled src={findLog.host.picture}/></ImageHostContainer>
                </HostContainer>
                <RatingContainer>
                    <StartRatingContainerGray>
                        {starArray.map((index) => {
                            return(
                                <StarsRating key={index.toString()}/>
                            )
                        })}
                    </StartRatingContainerGray>
                    <StartRatingContainerOrange>
                        {starArray.slice(0, ratingLength).map((index) =>{
                            return(
                                <StarsRating key={index.toString()}/>
                            )
                        })}
                    </StartRatingContainerOrange>
                    
                    
                </RatingContainer>

            </div>
        </SubBannerContainer>

        <CollapseContainer>
            <CollapseContainerSyledFlex>
                <Collapsible title = "Description">
                    <p> {findLog.description}</p>
                </Collapsible>
            </CollapseContainerSyledFlex>
            <CollapseContainerSyledFlex>
                <Collapsible title = "Equipements">
                    {findLog.equipments.map((indexEquip) =>(
                        <p>{indexEquip}</p>
                    ))}
                </Collapsible>
            </CollapseContainerSyledFlex>
            
        </CollapseContainer> 
         

    </MainContainer>
   )
   
}
export default Lodging

