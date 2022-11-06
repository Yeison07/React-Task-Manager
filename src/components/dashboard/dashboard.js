import Footer from "../footer/footer";
import SideBar from "../sidebar/sidebar";
import { GridContainer } from "../sidebar/style";
import {Container} from '../container/style'
import CardProject from "../cardProject/cardproject";
import { TitleS } from "../cardProject/style";
const DashBoard = () => {
    return ( 
        <GridContainer>
            <SideBar/>
            <Container direction="column">
                <Container height="auto">
                <TitleS style={{marginLeft:"2em"}}>Los siguientes proyectos estan en curso</TitleS>
                <hr />
                </Container>
                
                
            <Container bgcolor="#FFF" wrap="wrap" width="90%">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </Container>
            <Footer />
            </Container>
                
        
        </GridContainer>
     );
}
 
export default DashBoard;