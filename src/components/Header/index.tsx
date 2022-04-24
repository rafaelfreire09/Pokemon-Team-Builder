import * as S from './styles';
import { Props } from './types';

import Line from '../Line';

function Header({ children }: Props) 
{
    return (
        <S.Container>
            <Line color='#ffffff'/>
            <S.Text>
                {children}
            </S.Text>
        </S.Container>
    );
}

export default Header;