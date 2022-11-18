import Card from "../../components/Card";
import logement from "../../components/Assets/logements.json"
//import styled from 'styled-components'
//import colors from "../../utils/styles/colors";
import Banner from "../../components/Banner";
import imageBanner from "../../components/Assets/imageBanner.png"
import {Link} from 'react-router-dom'
import '../../utils/context/Main.css'


function Home() {
  return (
    <main className="MainContainer">
        <Banner 
        imageBanner = {imageBanner}
        title = "Chez vous, partout  et ailleurs"
        />
        <div className="CardsContainer">
        {logement.map((loge, index) => (
          <Link  to={`/Logement/${loge.id}`} key={`${loge.id}-${index}`}>
            <Card
            key={`${loge.id}-${index}`}
            cover={loge.cover}
            title={loge.title}
            />
          </Link>


       ))}
      </div>
    </main>

      

  )
}

export default Home;
