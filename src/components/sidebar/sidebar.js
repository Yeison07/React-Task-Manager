import {ReactComponent as PersonIcon} from '../../App/assets/images/person.svg'
import {ReactComponent as ProjectGoingIcon} from '../../App/assets/images/task.svg'
import {ReactComponent as ProjectStopIcon} from '../../App/assets/images/folder_open.svg'
import {ReactComponent as MembersActivesIcon} from '../../App/assets/images/group.svg'
import {ReactComponent as MembersHistoryIcon} from '../../App/assets/images/person_off.svg'
import React from 'react';
import {LinkOption, SideBarMenu } from "./style";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    return (  
        
            <SideBarMenu>
            <LinkOption >
            <PersonIcon fill="#fff" />
            <p>Usuario</p>
            </LinkOption>
            <LinkOption onClick={() => navigate('lista_proyectos')} >
                <ProjectGoingIcon width="35" />
                <p>Proyectos en curso</p>
                </LinkOption>
            <LinkOption  onClick={() => navigate('lista_proyectos')}>
                <ProjectStopIcon width="35" />
                <p>Proyectos archivados</p>
                </LinkOption>
            <LinkOption onClick={() => navigate('miembros_activos')}>
                <MembersActivesIcon width="35" />
                Miembros activos</LinkOption>
            <LinkOption onClick={() => navigate('historial_miembros')}>
                <MembersHistoryIcon width="35" />
                <p>Historial de miembros</p>
                </LinkOption>
            </SideBarMenu>
        
    );
}
 
export default SideBar;