import * as S from './styles';

import { Props } from './types';

import PokeSlot from './PokeSlot';
import PenIcon from '../Icon/PenIcon';
import RemChoIcon from '../Icon/RemChoIcon';

function MyTeam({ children, pen, icons }: Props) 
{
    return (
        <S.Container>
            <S.Title>
                <S.Text>
                    { children }
                </S.Text>
                {pen && <PenIcon />}
            </S.Title>

            <S.SlotTop>
                <PokeSlot />
                <PokeSlot />
                <PokeSlot />
            </S.SlotTop>

            <S.SlotBottom>
                <PokeSlot />
                <PokeSlot />
                <PokeSlot />
            </S.SlotBottom>

            {icons && 
                <S.Icons>
                    <RemChoIcon type={"remove"} opacity={"opacity(40%)"}/>
                    <RemChoIcon type={"choose"} opacity={"opacity(40%)"}/>
                </S.Icons>
            }
        </S.Container>
    );
}

export default MyTeam;