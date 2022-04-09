import * as S from './styles';

interface Props
{
    color: string;
}

function Line({ color }: Props) 
{
    return (
        <S.Container colorType={color}>
        </S.Container>
    );
}

export default Line;