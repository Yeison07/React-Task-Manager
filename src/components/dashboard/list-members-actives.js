import CardMember from "../cardmember/card-member";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container } from "../container/style";
import Footer from "../footer/footer";
import { Color } from "../../App/shared/styles/style";

const ListMembersActive = () => {
    return ( 
        <>
            <Container direction="column">
                <Container direction="column" align="flex-start" height="auto">
                    <div style={{margin:"1em 0em 1em 5em"}}>
                        <TitleS>Los siguientes miembros se encuentran activos en el semillero</TitleS>
                        <hr style={{border:`2px solid ${Color.primary}`}}/>
                    </div>
                </Container>
                <Container wrap="wrap" bgcolor="#fff" width="90%">
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                    <CardMember/>
                </Container>
                <Footer></Footer>
            </Container>
        </>
     );
}
 
export default ListMembersActive;