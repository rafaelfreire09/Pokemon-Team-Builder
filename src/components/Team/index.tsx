import { ReactNode } from 'react';
import * as S from './styles';

import PokeSlot from './PokeSlot';
import PenIcon from '../Icon/PenIcon';
import RemChoIcon from '../Icon/RemChoIcon';

interface Props
{
    children: ReactNode;
    pen?: boolean;
    icons?: boolean;
}

function Team({ children, pen, icons }: Props) 
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
                    <RemChoIcon type={"remove"} />
                    <RemChoIcon type={"choose"} />
                </S.Icons>
            }
        </S.Container>
    );
}

export default Team;