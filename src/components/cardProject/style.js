import styled from "styled-components";
import { Color,Fonts } from "../../App/shared/styles/style";

export const CardProjectS=styled.div`
    display: flex;
    width: 400px;
    padding: 0 2.5em;
    

    & hr:first-of-type{
        border: 2px solid ${Color.hrLineDark};
    }

    & >hr:nth-child(3){
        margin-left: 2em;
        border: 1px solid ${Color.hrLineLight}60;
    }
    
    & > div{
        padding-left: 1em;
    }

    &:hover{
        -webkit-box-shadow:inset 0px 0px 0px 1px #00000005;
        -moz-box-shadow:inset 0px 0px 0px 1px #00000005;
        box-shadow:inset 0px 0px 0px 1px #00000005;
        background-color: #FFF9F9;
        border-radius: 1em;
        
    }

    
`
export const TitleS=styled.p`
    font-weight: 500;
    font-size: ${Fonts.FONT_SIZE_LARGE}px;
    
`

export const DescriptionText=styled.p`
    font-size: ${Fonts.FONT_SIZE_MEDIUM}px;
`