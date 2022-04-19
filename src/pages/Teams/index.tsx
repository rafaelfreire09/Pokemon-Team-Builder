import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import * as S from './styles';

import Header from '../../components/Header';
import MyTeam from '../../components/MyTeam';
import Line from '../../components/Line';

import { teamsData } from '../../utils';
import { ITeam } from '../../types/pokemon';

function Teams() 
{
    const teamsStore = useAppSelector(state => state.teams);

    /* const [ teams, setTeams ] = useState<ITeam[]>([]);
    const [ showMessage, setShowMessage ] = useState(true);

    useEffect(() => {
        setTeams(teamsStore);
        if (teams !== [])
        {
            console.log('Chegou1');
            setShowMessage(false);
        } else
        {
            console.log('Chegou2');
            setShowMessage(true);
        }
    }, [teamsStore]) */

    return (
        <S.Container>
            <Link to="/create-new-team" style={{ textDecoration: 'none' }}>
                <Header>
                    CREATE NEW TEAM
                </Header>
            </Link>

            <S.TeamsSection>
                {/* {showMessage && 
                    <p>You don't have teams created</p>
                } */}
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
                {/* {
                    teamsData.map((element, index) => {
                        return (
                            <S.SingleTeam key={index}>
                                <MyTeam team={element} />
                                <S.LinePosition>
                                    <Line color='#333652'/>
                                </S.LinePosition>
                            </S.SingleTeam>
                        )
                    })
                } */}
            </S.TeamsSection>
        </S.Container>
    );
}

export default Teams;