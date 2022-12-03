import styled from "styled-components";
import { Color } from "../../App/shared/styles/style";
import iconSearch from "../../App/assets/images/search.svg"

export const SearchS=styled.input`
    height: 30px;
    border: 1px solid ${Color.hrLineDark};
    background: url(${iconSearch}) no-repeat left;
    background-size: 20px;
    padding-left: 2em;
    

    &:hover{
        background-color: ${Color.backgroundDark};
    }

    

`