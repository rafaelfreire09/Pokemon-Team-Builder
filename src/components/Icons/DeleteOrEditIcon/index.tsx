import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import * as S from './styles';
import { IProps } from './types';

import Remove from '../../../assets/cross-icon.png';
import Edit from '../../../assets/edit-icon.png';

import { deleteTeam } from '../../../redux/teamsSlice';
import { editTeamCreated } from '../../../redux/myTeamSlice';

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
            return Edit;
        }
    }

    function whatColor (color: string): string
    {
        if(color === 'delete')
        {
            return "#ff3232";
        } else
        {
            return "#4854ff";
        }
    }

    const handleClick = () => 
    {
        if (type === "delete")
        {
            dispatch(
                deleteTeam(
                    {
                        id: team.id
                    }
                )
            );
        } 
        
        if (type === "edit")
        {
            dispatch(
                editTeamCreated(
                    team
                )
            );

            navigate('/create-new-team');
        }
    }

    return (
        <S.Container color={whatColor(type)} onClick={handleClick}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default DeleteOrEditIcon;