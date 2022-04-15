import * as S from './styles';
import { IProps } from './types';

import Line from '../Line';

function Header({ children }: IProps) 
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