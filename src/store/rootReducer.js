import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './actions/example';
import characterListReducer from './actions/characterList';

const store = configureStore({
  reducer: {
    characterList: characterListReducer
  },
});

export default store;