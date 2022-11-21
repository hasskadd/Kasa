import { StyledErrorLink } from '../../utils/styles/Atom'
import '../../utils/context/Main.css'



function Error(){
    return (
        <main className='mainContainerError'>
            <h1 className='titleError'>404</h1>
            <p className='pStyleError'>Oups! La page que vous demandez n'existe pas.</p>
            <StyledErrorLink to='/'>Retourner sur la page d’accueil</StyledErrorLink>
        </main>
    )
}

export default Error