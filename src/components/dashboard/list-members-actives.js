import CardMember from "../card/card-member";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container } from "../container/style";
import Footer from "../footer/footer";

const ListMembersActive = () => {
    return ( 
        <>
            <Container direction="column">
                <Container direction="column" align="flex-start" height="auto">
                    <TitleS>Los siguientes miembros se encuentran activos en el semillero</TitleS>
                    <hr />
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