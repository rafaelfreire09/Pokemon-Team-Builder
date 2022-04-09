import * as S from './App.styles';

import CreateNewTeam from './pages/CreateNewTeam';
import Teams from './pages/Teams';

function App() 
{
    return (
        <S.Body>
            <S.Container>
                <CreateNewTeam/>
            </S.Container>
        </S.Body>
    );
}

export default App;
