import * as S from './styles';

import { Props } from './types';

import PokeSlot from './PokeSlot';
import PenIcon from '../Icon/PenIcon';
import RemOrSubIcon from '../Icon/RemOrSubIcon';

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
                <PokeSlot idP={0}/>
                <PokeSlot idP={1}/>
                <PokeSlot idP={2}/>
            </S.SlotTop>

            <S.SlotBottom>
                <PokeSlot idP={3}/>
                <PokeSlot idP={4}/>
                <PokeSlot idP={5}/>
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