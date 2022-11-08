import {useParams} from 'react-router-dom'
import logement from '../../components/Assets/logements.json'
import Collapsible from '../../components/Collapse'
import styled  from 'styled-components'
//import ImageSlides from '../../components/ImageSlides'
import { useState } from 'react'
import arrowLeft from '../../components/Assets/arrowLeft.png'
import arrowRight from '../../components/Assets/arrowRight.png'

const CollapseContainer = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin: 40px 90px;
`
const ArrowStyle = styled.img`
background: black
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
    console.log(current)
   return(
    <div>
        <div>
            <ArrowStyle src={arrowLeft} onClick={prevSlide}/>
            <ArrowStyle src={arrowRight} onClick= {nextSlide}/>
            <span>{current + 1 }/{slideLength}</span>
            {findLog.pictures.map((slide, index) =>(
                <div>
                    {index === current && (<img src={slide}/>)}
                    
                </div>
                
            ) 
            )}
        </div>
      

       
        <CollapseContainer>
            <Collapsible title = "Description">
                <p> {findLog.description}</p>
            </Collapsible>
            <Collapsible title = "Equipements">
                <p>{findLog.equipments}</p>
            </Collapsible>
        </CollapseContainer>

    </div>
   )
   
}
export default Lodging