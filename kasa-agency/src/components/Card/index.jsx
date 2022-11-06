import styled from 'styled-components'
//import colors from '../../utils/styles/colors'

const CardWrapper = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
      
`

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
    padding:10px;
    position: absolute;
    bottom: 0;
    

`

function Card(props){
    return(
        <CardWrapper>
            <CardImage src={props.cover}/>
            <CardTitle>{props.title}</CardTitle>
        </CardWrapper>
    )
}


export default Card