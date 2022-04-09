import * as S from './styles';

import Header from '../../components/Header';
import Team from '../../components/Team';
import ChoosePokemon from '../../components/ChoosePokemon';

function CreateNewTeam() 
{
    return (
        <S.Container>
            <Header>
                TEAMS
            </Header>

            <Team pen={true} icons={true}>
                My Team
            </Team>
            
            <ChoosePokemon />
        </S.Container>
    );
}

export default CreateNewTeam;