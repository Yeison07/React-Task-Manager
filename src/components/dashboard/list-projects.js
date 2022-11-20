import { Color } from "../../App/shared/styles/style";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container } from "../container/style";
import Footer from "../footer/footer";

const ListProjects = () => {
    return ( 
        <Container
         bgcolor={Color.backgroundDark}  direction="column">
        <Container align="flex-start" direction="column" height="auto">
        <div style={{margin:"1em 0em 1em 5em"}}>
            <TitleS>Los siguientes proyectos estan en curso a la fecha
            </TitleS>
            <hr style={{border:`2px solid ${Color.primary}`}}/>
        </div>
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
     );
}
 
export default ListProjects;