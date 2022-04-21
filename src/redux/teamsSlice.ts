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
            state.push(action.payload);
        },
        deleteTeam: (state, action: PayloadAction<ITeam>) =>
        {
            function checkIfNotEqual (team: ITeam): boolean
            {
                console.log(team.name !== action.payload.name);
                return team.name !== action.payload.name
            }

            const newList = state.filter(team => checkIfNotEqual(team))

            console.log(newList);

            return newList;
        }
    },
});

export const { createNewTeam, deleteTeam } = teamsSlice.actions

export default teamsSlice;