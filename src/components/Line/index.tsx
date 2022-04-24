import * as S from './styles';
import { Props } from './types';

function Line({ color }: Props) 
{
    return (
        <S.Container colorType={color} />
    );
}

export default Line;