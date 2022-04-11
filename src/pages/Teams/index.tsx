import { Link } from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import MyTeam from '../../components/MyTeam';
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
                <MyTeam>
                    Kaio's Team
                </MyTeam>
                <S.LinePosition>
                    <Line color='#333652'/>
                </S.LinePosition>
            </S.SingleTeam>

            <S.SingleTeam>
                <MyTeam>
                    Kaio's Team
                </MyTeam>
                <S.LinePosition>
                    <Line color='#333652'/>
                </S.LinePosition>
            </S.SingleTeam>
        </S.Container>
    );
}

export default Teams;