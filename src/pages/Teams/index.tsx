import { Link } from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import Team from '../../components/MyTeam';
import Line from '../../components/Line';

function Teams() 
{
    return (
        <S.Container>
            <Link to="/create-new-team" style={{ textDecoration: 'none' }}>
                <Header>
                    CREATE NEW TEAM
                </Header>
            </Link>

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