import Card from "../../components/Card";
import logement from "../../components/Assets/logements.json"
import styled from 'styled-components'
import colors from "../../utils/styles/colors";

const CardsContainer = styled.div`
display:flex;
flex-wrap:wrap;
border:1px solid transparent;
border-radius: 25px;
background-color:${colors.allDivLogBackground};
padding: 56px 50px ;
gap 40px; 
`
/*const BodyCardContainer = styled.div`
  border: 1px solid trasparent;
  background-color:${colors.allDivLogBackground};
  padding:20px;
  border-radius: 25px;

` */




function Home() { 
  return (
      <CardsContainer>
        {logement.map((loge, index) => (
          <Card
            key={`${loge.id}-${index}`}
            cover={loge.cover}
            title={loge.title}
          />
       ))}
      </CardsContainer>

  )
}

export default Home;
