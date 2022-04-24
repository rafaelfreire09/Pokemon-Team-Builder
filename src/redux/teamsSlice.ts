import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Team } from '../types/pokemon';
import { RemoveTeam } from './types';

const initialState: Team[] = [];

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: initialState,
    reducers: 
    {
        createNewTeam: (state, action: PayloadAction<Team>) =>
        {
            state.push(action.payload);
        },
        deleteTeam: (state, action: PayloadAction<RemoveTeam>) =>
        {
            function checkIfNotEqual (team: Team): boolean
            {
                return team.id !== action.payload.id
            }

            const newList = state.filter(team => checkIfNotEqual(team))

            return newList;
        },
        editTeam: (state, action: PayloadAction<Team>) =>
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