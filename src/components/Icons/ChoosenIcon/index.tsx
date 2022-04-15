import * as S from './styles';

import Choosen from '../../../assets/choosen-icon.png';

function ChooseIcon() 
{
    return (
        <S.Container color="#8FDA58">
            <S.IconType src={Choosen}/>
        </S.Container>
    );
}

export default ChooseIcon;