import * as S from './styles';
import { IProps } from './types';

function Line({ color }: IProps) 
{
    return (
        <S.Container colorType={color} />
    );
}

export default Line;