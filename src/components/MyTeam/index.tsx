import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeTeamName } from '../../redux/myTeamSlice';
import * as S from './styles';

import { Props } from './types';

import PokeSlot from '../PokeSlot';
import RemoveOrCreateIcon from '../Icons/RemoveOrCreateIcon';
import DeleteOrEditIcon from '../Icons/DeleteOrEditIcon';

import { EIcon } from '../../types/icon'

function MyTeam({ team }: Props) 
{
    const [ firstMount, setFirstMount ] = useState(true);

    const [ teamName, setTeamName ] = useState('');
    
    const allInfo = useAppSelector(state => state.myTeam);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (firstMount)
        {
            changeName();
        } else 
        {
            setFirstMount(false);

            let nameSend = teamName;

            if (teamName === '')
            {
                nameSend = 'My team';
            }

            dispatch(
                changeTeamName(
                    {
                        name: nameSend
                    }
                )
            )
        }

        setFirstMount(false);
    }, [teamName])

    function changeName ()
    {
        if (allInfo.editing)
        {
            setTeamName(allInfo.name);
        }
    }

    const handleTeamNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTeamName(event.target.value)
    }

    return (
        <S.Container>
            <S.Title>
                {team?.name ?
                    <S.Text>
                        {team?.name}
                    </S.Text>
                    :
                    <S.Input
                        placeholder="Type a name here"
                        type="text"  
                        onChange={handleTeamNameInput}
                        value={teamName}
                    />
                }
            </S.Title>

            <S.SlotTop>
                <PokeSlot idP={0} full={team?.pokemons[0]}/>
                <PokeSlot idP={1} full={team?.pokemons[1]}/>
                <PokeSlot idP={2} full={team?.pokemons[2]}/>
            </S.SlotTop>

            <S.SlotBottom>
                <PokeSlot idP={3} full={team?.pokemons[3]}/>
                <PokeSlot idP={4} full={team?.pokemons[4]}/>
                <PokeSlot idP={5} full={team?.pokemons[5]}/>
            </S.SlotBottom>

            {team?.name ? 
                <S.Icons>
                    <S.IconsLeft>

                    </S.IconsLeft>
                    <S.IconsRight>
                        <DeleteOrEditIcon type={EIcon.Delete} team={team}/>
                        <DeleteOrEditIcon type={EIcon.Edit} team={team}/>
                    </S.IconsRight>
                </S.Icons>
                :
                <S.Icons>
                    <S.IconsLeft>
                        <RemoveOrCreateIcon type={EIcon.Clear}/>
                    </S.IconsLeft>
                    <S.IconsRight>
                        <RemoveOrCreateIcon type={EIcon.Remove}/>
                        <RemoveOrCreateIcon type={EIcon.Create}/>
                    </S.IconsRight>
                </S.Icons>
            }
        </S.Container>
    );
}

export default MyTeam;