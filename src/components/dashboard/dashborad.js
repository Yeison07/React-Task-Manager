import Footer from "../footer/footer";
import SideBar from "../sidebar/sidebar";
import { GridContainer } from "../sidebar/style";
import {Container} from '../container/style'
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Color } from "../../App/shared/utils/style";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return ( 
        <GridContainer bgcolor={Color.backgroundDark}>
            <SideBar/>
            <Outlet />
            
        </GridContainer>
     );
}
 
export default DashBoard;