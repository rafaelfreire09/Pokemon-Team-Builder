import {configureStore} from '@reduxjs/toolkit';
import myTeamSlice from './myTeamSlice'

const store=configureStore(
    {
        reducer: {
            myTeam: myTeamSlice.reducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch

export default store;
