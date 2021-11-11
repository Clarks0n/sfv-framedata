import { createSlice } from "@reduxjs/toolkit";
import json from '../../assets/data/frame.json';

const initialStateValue = { 
    characterList: []
};

export const characterListSlice = createSlice({
    name: 'characterList',
    initialState: initialStateValue ,
    reducers: {
        getCharacterList: (state) => {
            let charList = [];
            for (let i in json) { charList.push(i)}

            state.characterList = charList;
        }
    }
});

export const { getCharacterList } = characterListSlice.actions;

export default characterListSlice.reducer;