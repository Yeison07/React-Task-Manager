import { TitleS } from "../cardProject/style";
import { CardMemberS, ProfileContainer } from "./style";
import imgUrl from "../../App/assets/images/profile_pic.jpg"
import { SubTitleS } from "../dashboard/style";

const CardMember = () => {
    return ( 
        <CardMemberS>
                    <ProfileContainer imgUrl={imgUrl} />
                    <SubTitleS>Nombre aqui</SubTitleS>
        </CardMemberS>
     );
}
 
export default CardMember;