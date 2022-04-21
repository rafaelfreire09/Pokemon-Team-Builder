import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import * as S from './styles';
import { IProps } from './types';

import Remove from '../../../assets/remove-icon.png';
import Submit from '../../../assets/choosen-icon.png';

import { deleteTeam } from '../../../redux/teamsSlice';

function DeleteOrEditIcon ({ type, team }: IProps)
{
    let navigate = useNavigate();

    const dispatch = useAppDispatch();

    function whatIcon (icon: string): any
    {
        if(icon === 'delete')
        {
            return Remove;
        } else
        {
            return Submit;
        }
    }

    function whatColor (color: string): string
    {
        if(color === 'delete')
        {
            return "#F8635A";
        } else
        {
            return "#6068e2";
        }
    }

    const handleClick = () => 
    {
        if (type === "delete")
        {
            dispatch(
                deleteTeam(
                    team
                )
            );
        } 
        
        if (type === "edit")
        {
            
        }
    }

    return (
        <S.Container color={whatColor(type)} onClick={handleClick}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default DeleteOrEditIcon;