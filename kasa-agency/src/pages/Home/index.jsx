import Card from "../../components/Card";
import logement from "../../components/Assets/logements.json"
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 340px 340px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
` 




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
