import * as S from './styles';

import Header from '../../components/Header';
import Team from '../../components/Team';
import Line from '../../components/Line';

function Teams() 
{
    return (
        <S.Container>
            <Header>
                CREATE NEW TEAM
            </Header>

            <S.SingleTeam>
                <Team>
                    Kaio's Team
                </Team>
                <S.LinePosition>
                    <Line color='#333652'/>
                </S.LinePosition>
            </S.SingleTeam>

            <S.SingleTeam>
                <Team>
                    Kaio's Team
                </Team>
                <S.LinePosition>
                    <Line color='#333652'/>
                </S.LinePosition>
            </S.SingleTeam>
        </S.Container>
    );
}

export default Teams;