import * as S from './App.styles';

import Header from './components/Header';
import Team from './components/Team';
import ChoosePokemon from './components/ChoosePokemon';

function App() 
{
    return (
        <S.Body>
            <S.Container>
                <Header />
                <Team />
                <ChoosePokemon />
            </S.Container>
        </S.Body>
    );
}

export default App;
