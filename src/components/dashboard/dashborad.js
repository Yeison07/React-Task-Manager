import SideBar from "../sidebar/sidebar";
import { GridContainer } from "../sidebar/style";
import { Color } from "../../App/shared/styles/style";
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