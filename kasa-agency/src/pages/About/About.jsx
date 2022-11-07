import Banner from "../../components/Banner"
import imgAbout from "../../components/Assets/imgBannerAbout.png"
import styled from 'styled-components'
import Collapsible from "../../components/Collapse"


const MainContainer = styled.main`
margin 0 90px;
max-width: 1240px;  
`
const CollapseContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 40px 90px;
`



function About(){
    return (
        <MainContainer>
            <Banner 
                imageBanner = {imgAbout}
            />
            <CollapseContainer>
                <Collapsible title = "Fiabilité">
                    <p> 
                        Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées  par nos équipes.
                    </p>                     
                </Collapsible>

                <Collapsible title = "Respect">
                    <p> 
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme.
                    </p>
                </Collapsible>
                <Collapsible title = "Service">
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir 
                        une expérience parfaite. N'hésitez pas à nous contacter
                        si vous avez la moindre question.
                    </p>
                </Collapsible>
                <Collapsible title = "Sécurité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour 
                        nos hôtes que pour les voyageurs, chaque logement correspond 
                        aux critères de sécurité établis par nos services. En laissant
                         une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
                          de vérifier que les standards sont bien respectés. Nous organisons également 
                          des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapsible>
            </CollapseContainer>
        </MainContainer>

    )
}

export default About