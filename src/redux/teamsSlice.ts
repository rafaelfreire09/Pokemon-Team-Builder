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

            return newList;
        },
        editTeam: (state, action: PayloadAction<ITeam>) =>
        {
            for (let i = 0; i < Object.keys(state).length; i++)
            {
                if (state[i].id === action.payload.id)
                {
                    state[i].name = action.payload.name;
                    state[i].pokemons = action.payload.pokemons;
                }
            }
        },
    },
});

export const { createNewTeam, deleteTeam, editTeam } = teamsSlice.actions

export default teamsSlice;