import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITeam } from '../types/pokemon';
import { IRemoveTeam } from './types';

const initialState: ITeam[] = [];

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: initialState,
    reducers: 
    {
        createNewTeam: (state, action: PayloadAction<ITeam>) =>
        {
            state.push(action.payload);
        },
        deleteTeam: (state, action: PayloadAction<IRemoveTeam>) =>
        {
            function checkIfNotEqual (team: ITeam): boolean
            {
                return team.id !== action.payload.id
            }

            const newList = state.filter(team => checkIfNotEqual(team))

            console.log(newList);

            return newList;
        }
    },
});

export const { createNewTeam, deleteTeam } = teamsSlice.actions

export default teamsSlice;