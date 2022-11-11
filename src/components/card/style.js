import styled from "styled-components";
import { Color } from "../../App/shared/utils/style";

export const CardMemberS= styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    transition: all 0.1s;
    padding: 2em 3em;
    
    

    &:hover{
        background: ${Color.backgroundMedium};
        transition: all 0.1s;
        
    }
`

export const ProfileContainer= styled.div`
    width: 150px;
    height: 150px;
    background-size: 150px 150px;
    border-radius: 50%;
    background-image: url(${({imgUrl})=> imgUrl ? imgUrl : "none"});
    background-position: center;
    



`