import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeTeamName } from '../../redux/myTeamSlice';
import * as S from './styles';

import { IProps } from './types';

import PokeSlot from '../PokeSlot';
import RemOrSubIcon from '../Icons/RemOrSubIcon';
import DeleteOrEditIcon from '../Icons/DeleteOrEditIcon';

import PenIcon from '../Icons/PenIcon';
function MyTeam({ team }: IProps) 
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
        console.log(event.target.value);
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
                        //type="search" 
                        //onsearch={handleTeamNameInput}  
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
                    <DeleteOrEditIcon type="delete" team={team}/>
                    <DeleteOrEditIcon type="edit" team={team}/>
                </S.Icons>
                :
                <S.Icons>
                    <RemOrSubIcon type={"remove"}/>
                    <RemOrSubIcon type={"submit"}/>
                </S.Icons>
            }
        </S.Container>
    );
}

export default MyTeam;