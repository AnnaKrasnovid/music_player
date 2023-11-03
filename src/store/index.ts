import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './reducers/songsSlice';
import activeSong from "./reducers/activeSong";

export default configureStore({
    reducer: {
        songs: songsReducer,
        activeSong:activeSong
    }
})