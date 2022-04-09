import * as S from './styles';

function PokeSlot() 
{
    return (
        <S.Container>
            <S.BallTop />
            <S.Division>
                <S.DivisionLine />
                <S.DivisionCircle />
            </S.Division>
            <S.BallBottom />
        </S.Container>
    );
}

export default PokeSlot;