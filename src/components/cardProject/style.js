import styled from "styled-components";
import { Color } from "../../App/shared/utils/style";
export const CardProjectS=styled.div`
    display: flex;
    width: 500px;

    & hr:first-of-type{
        border: 3px dashed ${Color.hrLineDark};
        background-color: ${Color.hrLineDark};
    }

    & >hr:nth-child(3){
        margin-left: 1em;
        border: 1px solid ${Color.hrLineLight};
        background-color: #000;
    }
    
    & p{
        
    }

`
export const TitleS=styled.p`
    font-weight: 500;
    font-size: 22px;
`