import {Link} from 'react-router-dom'
import colors from './colors'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    color: ${colors.primaryOrange};
    border: 2px solid transparent;
    &:active{
        border-bottom:1px solid red;
    }
`
export const StyledErrorLink = styled(Link)`
text-decoration: none;
font-weight: 500;
font-size: 18px;
color: ${colors.primaryOrange};
border: 2px solid transparent;
margin-bottom: 80px;
&:active{
    border-bottom:1px solid red;
}

`