import {configureStore} from '@reduxjs/toolkit';
import myTeamSlice from './myTeamSlice'
import teamsSlice from './teamsSlice';

const store=configureStore(
    {
        reducer: {
            myTeam: myTeamSlice.reducer,
            teams: teamsSlice.reducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
