import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as S from './App.styles';

import CreateNewTeam from './pages/CreateNewTeam';
import Teams from './pages/Teams';

function App() 
{
    return (
        <S.Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Teams/>}></Route>
                    <Route path='/create-new-team' element={<CreateNewTeam/>}></Route>
                </Routes>
            </BrowserRouter>
        </S.Container>
    );
}

export default App;
