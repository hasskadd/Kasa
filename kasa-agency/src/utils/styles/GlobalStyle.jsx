import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
      box-sizing: border-box;
    }
    body {
        margin: 0 90px;
        max-width: 1240px;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle/>
}

export default GlobalStyle