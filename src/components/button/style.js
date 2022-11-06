import styled from "styled-components";

export const ButtonS=styled.button`
    border: none;
    border-radius: 3px;
    height: 50px;
    background-color: ${({bgColor})=> bgColor};
    color: #fff;
    transition: all 0.3s;
    font-size: 18px;
    font-family: 'Roboto',sans-serif;
    font-weight: 500;
    letter-spacing: 1px;

    &:hover{
        background-color: ${({bgColorHover})=> bgColorHover};
        transform: translateY(-0.3em);
        
    }

`