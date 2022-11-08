import Card from "../../components/Card";
import logement from "../../components/Assets/logements.json"
import styled from 'styled-components'
import colors from "../../utils/styles/colors";
import Banner from "../../components/Banner";
import imageBanner from "../../components/Assets/imageBanner.png"
import {Link} from 'react-router-dom'
//import Error from "../../components/Error";


const CardsContainer = styled.div`
display:flex;
flex-wrap:wrap;
border:1px solid transparent;
border-radius: 25px;
background-color:${colors.allDivLogBackground};
padding: 56px 50px ;
gap 40px;
margin-bottom: 40px; 
`

const MainContainer = styled.main`
margin 0 90px;
max-width: 1240px;
`



function Home() {
  return (
    <MainContainer>
        <Banner 
        imageBanner = {imageBanner}
        title = "Chez vous, partout  et ailleurs"
        />
        <CardsContainer>
        {logement.map((loge, index) => (
          <Link to={`/Logement/${loge.id}`}>
            <Card
            key={`${loge.id}-${index}`}
            cover={loge.cover}
            title={loge.title}
            />
          </Link>
          
       ))}
      </CardsContainer>
    </MainContainer>

      

  )
}

export default Home;
