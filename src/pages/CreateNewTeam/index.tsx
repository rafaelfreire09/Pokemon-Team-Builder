import { Link } from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import MyTeam from '../../components/MyTeam';
import ChoosePokemon from '../../components/ChoosePokemon';

function CreateNewTeam() 
{
    return (
        <S.Container>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Header>
                    TEAMS
                </Header>
            </Link>

            <MyTeam text="My team" pen={true} icons={true} />

            <ChoosePokemon />
        </S.Container>
    );
}

export default CreateNewTeam;