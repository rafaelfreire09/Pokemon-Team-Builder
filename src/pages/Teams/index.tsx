import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import * as S from './styles';

import Header from '../../components/Header';
import MyTeam from '../../components/MyTeam';
import Line from '../../components/Line';

import { Team } from '../../types/pokemon';

function Teams() 
{
    const teamsStore = useAppSelector(state => state.teams);

    const [ teams, setTeams ] = useState<Team[]>([]);
    const [ showMessage, setShowMessage ] = useState(true);

    useEffect(() => {
        setTeams(teamsStore);
    }, []);

    useEffect(() => {
        setTeams(teamsStore);
    }, [teamsStore]);

    useEffect(() => {
        checkMessage();
    }, [teams])

    function checkMessage ()
    {
        if (teams.length !== 0)
        {
            setShowMessage(false);
        } else
        {
            setShowMessage(true);
        }
    }

    return (
        <S.Container>
            <Link to="/create-new-team" style={{ textDecoration: 'none' }}>
                <Header>
                    CREATE NEW TEAM
                </Header>
            </Link>

            <S.TeamsSection>
                {showMessage && 
                    <S.Message>
                        You don't have teams created.
                    </S.Message>
                }
                {
                    teamsStore.map((element, index) => {
                        return (
                            <S.SingleTeam key={index}>
                                <MyTeam team={element} />
                                <S.LinePosition>
                                    <Line color='#333652'/>
                                </S.LinePosition>
                            </S.SingleTeam>
                        )
                    })
                }
            </S.TeamsSection>
        </S.Container>
    );
}

export default Teams;