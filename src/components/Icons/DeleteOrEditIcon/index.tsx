import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import * as S from './styles';
import { Props } from './types';

import { whatColor, whatIcon } from '../functions';
import { DeleteTeam, EditTeam } from './functions';

function DeleteOrEditIcon ({ type, team }: Props)
{
    let navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleClick = () => 
    {
        if (type === "delete")
        {
            DeleteTeam(team, dispatch);
        } 
        
        if (type === "edit")
        {
            EditTeam(team, dispatch, navigate);
        }
    }

    return (
        <S.Container color={whatColor(type)} onClick={handleClick}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default DeleteOrEditIcon;