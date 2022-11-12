import styled from 'styled-components'
import '../../utils/context/Main.css'
/*
const CardWrapper = styled.article`
    width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
      
`
*/
const CardImage = styled.img`
    width: 100%;
    height: 100%;    
    object-fit: cover;
`
const CardTitle = styled.p`
    size : 18px;
    width:300px;
    height:52px;
    margin:0;
    color: #FFFFFF;
    padding:10px;
    position: absolute;
    bottom: 0;
`
const Overlay = styled.div`
background-image: linear-gradient(to top, rgba(0,0,0,0.8) , rgba(0,0,0,0));
position: absolute;
width:100%;
height:100%;
top:0;
`

function Card(props){
    return(
        <article className='CardWrapper'>
            <CardImage src={props.cover}/>
            <Overlay></Overlay>
            <CardTitle>{props.title}</CardTitle>
        </article>
    )
}


export default Card