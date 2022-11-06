//import personIcon from '../../App/assets/images/person.png'
import {ReactComponent as PersonIcon} from '../../App/assets/images/person.svg'
import {ReactComponent as ProjectGoingIcon} from '../../App/assets/images/task.svg'
import {ReactComponent as ProjectStopIcon} from '../../App/assets/images/folder_open.svg'
import {ReactComponent as MembersActivesIcon} from '../../App/assets/images/group.svg'
import {ReactComponent as MembersHistoryIcon} from '../../App/assets/images/person_off.svg'
import React from 'react';
import {LinkOption, SideBarMenu } from "./style";

const SideBar = () => {
    return (  
        
            <SideBarMenu>
            <LinkOption>
            <PersonIcon fill="#fff" />
            <p>Usuario</p>
            </LinkOption>
            <LinkOption  href='#'>
                <ProjectGoingIcon width="35" />
                <p>Proyectos en curso</p>
                </LinkOption>
            <LinkOption  href='#'>
                <ProjectStopIcon width="35" />
                <p>Proyectos archivados</p>
                </LinkOption>
            <LinkOption href='#'>
                <MembersActivesIcon width="35" />
                Miembros activos</LinkOption>
            <LinkOption href='#'>
                <MembersHistoryIcon width="35" />
                <p>Historial de miembros</p>
                </LinkOption>
            </SideBarMenu>
        
    );
}
 
export default SideBar;