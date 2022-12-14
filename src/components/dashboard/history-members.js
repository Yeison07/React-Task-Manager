import CardHistoryMember from "../card-history-member/card-history-member";
import { TitleS } from "../cardProject/style";
import { Container } from "../container/style";
import Footer from "../footer/footer";
import { InputS } from "../input/input";
import { Color } from "../../App/shared/styles/style";
import {ReactComponent as SearchIcon} from "../../App/assets/images/search.svg"

const HistoryMembers = () => {
    return (
        <Container direction="column">
            <Container align="flex-start" height="auto" direction="column">
                <div style={{margin:"1em 0em 1em 5em"}}>
                    <TitleS>Los siguientes miembros hicieron parte del semillero y no estan activos actualmente</TitleS>
                    <hr style={{border:`2px solid ${Color.primary}`}}/>
                </div>
            </Container>
            
            <Container bgcolor="#FFF" wrap="wrap" width="90%">
            <Container align="flex-start" direction="column" height="0">
                 <TitleS style={{margin:"0em 0em 3em 4em"}}>Historial de miembros</TitleS>
                 <SearchIcon width="35"/>
                {/* <InputS placeholder="Buscar miembros"></InputS> */}
            </Container>
            
                <Container height="auto" wrap="wrap">
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                </Container>
             
            </Container>
            
        </Container>
    );
}

export default HistoryMembers;