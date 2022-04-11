import * as S from './styles';

function PokeSlot() 
{
    return (
        <S.Container>
            <S.Division>
                <S.DivisionLine />
                <S.DivisionCircle />
            </S.Division>
            <S.BallTop color={"#ffffff"}/>
            <S.BallBottom color={"#ffffff"}/>
        </S.Container>
    );
}

export default PokeSlot;