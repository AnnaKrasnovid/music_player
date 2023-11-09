import { createSlice } from "@reduxjs/toolkit";

import Image from '../../assets/images/images/cover.png'

import { songs } from "../../assets/appData/songs";

const initialState = {
    playlists: [
        {
            id: 1,           
            name: 'All',
            songs: songs,
            cover: Image
        },
    ]
}

const playlistSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: {
        addPlaylist(state, action) {
            console.log(action.payload.playlist)
        },
    },
});

export const { addPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;