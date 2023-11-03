import { createSlice } from "@reduxjs/toolkit";

import { songs } from "../../assets/appData/songs";

const initialState = {
    songs: songs,
}

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        getSongs(state) {
            state.songs = songs;
        },       
    },
});

export const { getSongs } = songsSlice.actions;
export default songsSlice.reducer;