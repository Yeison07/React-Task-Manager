import img from "../../App/assets/images/profile_pic.jpg"
import { SubTitleS } from "../dashboard/style";
import { CardHistoryS, HistoryMemberPic } from "./style";

const CardHistoryMember = () => {
    return ( 
        <CardHistoryS>
        <HistoryMemberPic imgUrl={img} />
        <SubTitleS>Nombre aqui</SubTitleS>
        </CardHistoryS>
     );
}
 
export default CardHistoryMember;