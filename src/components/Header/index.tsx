import { ReactNode } from 'react';
import * as S from './styles';

import Line from '../Line';

interface Props
{
    children: ReactNode;
}

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