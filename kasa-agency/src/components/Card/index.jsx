import styled from 'styled-components'

const CardWrapper = styled.div`
    display:flex;
    flex-direction:row;
    padding:20px;
    width: 340px;
    height: 340px
        &:hover{
            cursor:pointer;
        } 
`

const CardImage = styled.img`
    width: 340px;
    height: 340px;    
    border-raduis: 10px;
    object-fit: cover;
`
const CardTitle = styled.h3`
    size : 18px
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