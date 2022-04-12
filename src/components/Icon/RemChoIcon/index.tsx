import * as S from './styles';

import Remove from '../../../assets/remove-icon.png';
import Choosen from '../../../assets/choosen-icon.png';

interface IIconType
{
    type: string
    opacity: string;
}

function RemChoIcon ({ type, opacity }: IIconType)
{
    function whatIcon (icon: string): any
    {
        if(icon == 'remove')
        {
            return Remove;
        } else 
        {
            return Choosen;
        }
    }

    function whatColor (color: string): string
    {
        if(color == 'remove')
        {
            return "#F8635A";
        } else 
        {
            return "#8FDA58";
        }
    }

    return (
        <S.Container color={whatColor(type)} opacityLevel={opacity}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default RemChoIcon;