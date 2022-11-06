import styled from "styled-components";
import { Color } from "../../App/shared/utils/style";


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    grid-template-rows: auto auto;
    color: ${Color.textDarkest};
    background-color: ${Color.backgroundDark};
    height: 100vh;
`

export const SideBarMenu = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${Color.borderLight};
    height: 100vh;

    & >:first-child{
        margin: 0em 0em 2.5em 0em;
        display:flex;
        background-color: ${Color.primary};
        height: 90px;
        color:#fff;
        font-weight: 500;
        font-size: 19px;
    }

    & >:nth-child(n+2){
        font-weight: 400;
        
    }

    & >:nth-child(n+2):hover{
        background-color: ${Color.selectLight};
    }

    
 

`

export const LinkOption = styled.a`
    display: flex;
    align-items: center;
    padding-left: 1em;
    margin: 1em 0em 1em 0;
    color: ${Color.textDarkest};
    height: 50px;
    text-decoration: none;

    & > svg{
        margin-right: 0.8em;
    }
    
`