import * as S from './styles';

import PokeSlot from './PokeSlot';
import RemoveIcon from '../Icon/RemoveIcon';
import ChooseIcon from '../Icon/ChoosenIcon';
import PenIcon from '../Icon/PenIcon';

function Team() 
{
    return (
        <S.Container>
            <S.Title>
                <S.Text>
                    My Team
                </S.Text>
                <PenIcon />
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

            <S.Icons>
                <RemoveIcon />
                <ChooseIcon />
            </S.Icons>
        </S.Container>
    );
}

export default Team;