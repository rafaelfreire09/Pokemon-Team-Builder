import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Team } from '../types/pokemon';
import { MyTeam, RemovePokemon, AddPokemon, ChangeTeamName, SelectPokemon, ClearTeam } from './types';

const initialState: MyTeam = {
    id: '',
    name: 'My team',
    editing: false,
    allTrue: true,
    slot: [
        {
            image: '',
            type1: '',
            type2: '',
            selected: true,
        },
        {
            image: '',
            type1: '',
            type2: '',
            selected: true,
        },
        {
            image: '',
            type1: '',
            type2: '',
            selected: true,
        },
        {
            image: '',
            type1: '',
            type2: '',
            selected: true,
        },
        {
            image: '',
            type1: '',
            type2: '',
            selected: true,
        },
        {
            image: '',
            type1: '',
            type2: '',
            selected: true,
        }
    ]
};

export const myTeamSlice = createSlice({
    name: 'myteam',
    initialState: initialState,
    reducers: {
        changeTeamName (state, action:PayloadAction<ChangeTeamName>)
        {
            state.name = action.payload.name;
        },
        addPokemon (state, action:PayloadAction<AddPokemon>)
        {
            //const id = action.payload.id;
            let id = -1;

            for (let i = 0; i < Object.keys(state.slot).length; i++)
            {
                if (!state.slot[i].image)
                {
                    id = i;
                    break;
                }
            }

            state.slot[id].image = action.payload.image;
            state.slot[id].type1 = action.payload.type1;
            state.slot[id].type2 = action.payload.type2;

            // Set all atribute Selected as True
            for (let i = 0; i < Object.keys(state.slot).length; i++)
            {
                state.slot[i].selected = true;
            }
        },
        removePokemon (state, action:PayloadAction<RemovePokemon>)
        {
            const id = action.payload.id;

            state.slot[id].image = '';
            state.slot[id].type1 = '';
            state.slot[id].type2 = '';
            state.allTrue = true;

            // Set all atribute Selected as True
            for (let i = 0; i < Object.keys(state.slot).length; i++)
            {
                state.slot[i].selected = true;
            }
        },
        selectPokemon (state, action:PayloadAction<SelectPokemon>)
        {
            let id = action.payload.id;

            function setOtherFalse ()
            {
                for (let i = 0; i < Object.keys(state.slot).length; i++)
                {
                    if (state.slot[i].image === action.payload.image)
                    {
                        state.slot[i].selected = true;
                    } else 
                    {
                        state.slot[i].selected = false;
                    }
                }
            }

            function setAllTrue ()
            {
                for (let i = 0; i < Object.keys(state.slot).length; i++)
                {
                    state.slot[i].selected = true;
                }
            }

            if (state.allTrue)
            {
                setOtherFalse();
                state.allTrue = false;
            } else 
            {
                if (state.slot[id].selected === true)
                {
                    setAllTrue();
                    state.allTrue = true;
                } else 
                {
                    setOtherFalse();
                    state.allTrue = false;
                }
            }
        },
        editTeamCreated (state, action:PayloadAction<Team>)
        {
            for (let i = 0; i < Object.keys(state.slot).length; i++)
            {
                state.slot[i].image = action.payload.pokemons[i].image
                state.slot[i].type1 = action.payload.pokemons[i].type1
                state.slot[i].type2 = action.payload.pokemons[i].type2
                state.slot[i].selected = true;
            }

            state.id = action.payload.id;
            state.name = action.payload.name;
            state.editing = true;
        },
        clearData (state, action:PayloadAction<ClearTeam>)
        {
            if (action.payload.clearName)
            {
                state.name = 'My team';
                state.editing = false;
            }

            state.id = '';
            state.allTrue = true;

            for (let i = 0; i < Object.keys(state.slot).length; i++)
            {
                state.slot[i].image = '';
                state.slot[i].type1 = '';
                state.slot[i].type2 = '';
                state.slot[i].selected = true;
            }
        },
    }
})

export const { changeTeamName, addPokemon, removePokemon, selectPokemon, editTeamCreated, clearData } = myTeamSlice.actions

export default myTeamSlice;