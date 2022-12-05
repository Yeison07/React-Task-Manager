import { CardProjectS, DescriptionText, TitleS } from "./style";
import {ReactComponent as ProjectSpecialIcon} from '../../App/assets/images/folder_special.svg'
import {ReactComponent as ProjectOffIcon} from '../../App/assets/images/folder_off.svg'
import React, { useState, useEffect } from 'react';

const CardProject = ({state}) => {
    const [estado, setEstado] = useState(state);
    return (
        <CardProjectS>
            {estado === "off" ? <ProjectOffIcon width="400" height="130"/> : <ProjectSpecialIcon width="400" height="130"/>}
            
            <div>
                <TitleS>Title</TitleS>
                <hr />
                <DescriptionText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam pariatur odit culpa illo et dolores, modi repellendus fugit distinctio voluptatibus. Dolorem culpa, enim reprehenderit quaerat nostrum debitis perferendis ea libero.
                </DescriptionText>
            </div>
            <hr style={{height:"250px"}} />
            
        </CardProjectS>);
}

export default CardProject;