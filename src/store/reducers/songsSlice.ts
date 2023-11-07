import { createSlice } from "@reduxjs/toolkit";

import { songs } from "../../assets/appData/songs";

const initialState = {
    songs: songs,
}

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        changeSongsList(state, action) {
            state.songs = action.payload.songs;
        },       
    },
});

export const { changeSongsList } = songsSlice.actions;
export default songsSlice.reducer;