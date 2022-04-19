import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRemove, ISlot } from './types';

const initialState = {
    name: 'My team',
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
        addPokemon (state, action:PayloadAction<ISlot>)
        {
            const id = action.payload.id;

            state.slot[id].image = action.payload.image;
            state.slot[id].type1 = action.payload.type1;
            state.slot[id].type2 = action.payload.type2;

            // Set all atribute Selected as True
            for (let i = 0; i < Object.keys(state.slot).length; i++)
            {
                state.slot[i].selected = true;
            }
        },
        removePokemon (state, action:PayloadAction<IRemove>)
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
        selectPokemon (state, action:PayloadAction<ISlot>)
        {
            let id = action.payload.id;

            function setOtherFalse ()
            {
                for (let i = 0; i < Object.keys(state.slot).length; i++)
                {
                    if (state.slot[i].image == action.payload.image)
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
                if (state.slot[id].selected == true)
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
    }
})

export const { addPokemon, removePokemon, selectPokemon } = myTeamSlice.actions

export default myTeamSlice;