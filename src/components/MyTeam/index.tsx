import * as S from './styles';

import { IProps } from './types';

import PokeSlot from '../PokeSlot';
import PenIcon from '../Icons/PenIcon';
import RemOrSubIcon from '../Icons/RemOrSubIcon';

function MyTeam({ teamName, text, pen, icons, team }: IProps) 
{
    return (
        <S.Container>
            <S.Title>
                {text && 
                    <S.Input type="text" placeholder={text}/>
                }
                {teamName && 
                    <S.Text>
                        {teamName}
                    </S.Text>
                }
                {team?.name && 
                    <S.Text>
                        {team?.name}
                    </S.Text>
                }
                {pen && <PenIcon />}
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

            {icons && 
                <S.Icons>
                    <RemOrSubIcon type={"remove"}/>
                    <RemOrSubIcon type={"submit"}/>
                </S.Icons>
            }
        </S.Container>
    );
}

export default MyTeam;