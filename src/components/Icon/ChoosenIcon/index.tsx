import * as S from './styles';

import Choosen from '../../../assets/choosen-icon.png';

function ChooseIcon() 
{
    return (
        <S.Container>
            <S.IconType src={Choosen}/>
        </S.Container>
    );
}

export default ChooseIcon;