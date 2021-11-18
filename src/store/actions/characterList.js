import { createSlice } from "@reduxjs/toolkit";
import json from '../../assets/data/frame.json';

const initialStateValue = { 
    characterList: [],
    characterData: []
};

export const characterListSlice = createSlice({
    name: 'characterList',
    initialState: initialStateValue ,
    reducers: {
        getCharacterList: (state) => {
            let charList = [];
            for (let i in json) { charList.push(i)}

            state.characterList = charList;
        },
        getCharacterData: (state,action) => {
            state.characterData = json[action.payload];
        }
    }
});

export const { getCharacterList, getCharacterData } = characterListSlice.actions;

export default characterListSlice.reducer;