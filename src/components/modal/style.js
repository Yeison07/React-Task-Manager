import styled from "styled-components";
import { Color, Fonts } from "../../App/shared/styles/style";

const modalS=styled.div`
    width: 500px;
    height: 400px;
    background-color: ${Color.backgroundLight};
    display: flex;


`

const ModalTitle=styled.p`
    font-size: ${Fonts.FONT_SIZE_LARGE}px;
    color: ${Fonts.PRIMARY_COLOR};

`