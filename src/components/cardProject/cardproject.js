import { CardProjectS, TitleS } from "./style";
import {ReactComponent as ProjectSpecialIcon} from '../../App/assets/images/folder_special.svg'
const CardProject = () => {
    return (
        <CardProjectS>
            <ProjectSpecialIcon width="400" height="130"/>
            <div>
                <TitleS>Title</TitleS>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum debitis minima vel aliquid sit, in labore facilis repudiandae illo mollitia rem expedita molestias delectus voluptatem. Ex, illum. Ea, dolore quo.</p>
            </div>
            <hr style={{height:"250px"}} />
            
        </CardProjectS>);
}

export default CardProject;