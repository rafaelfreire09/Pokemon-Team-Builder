import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITeam } from '../types/pokemon';

const initialState: ITeam[] = [];

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: initialState,
    reducers: 
    {
        createNewTeam: (state, action: PayloadAction<ITeam>) =>
        {
            state.push(action.payload)
        }
    },
});

export const { createNewTeam } = teamsSlice.actions

export default teamsSlice;