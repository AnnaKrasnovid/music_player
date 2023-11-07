import { createSlice } from "@reduxjs/toolkit";
import { SongInt } from "../../types/SongInt";
import { songs } from "../../assets/appData/songs";

interface StateInt {
    favoritesSongs: Array<SongInt>
}

const initialState: StateInt = {
    favoritesSongs: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addSong(state, action) {
            state.favoritesSongs.push(action.payload.song);
        },
        deleteSong(state, action) {
            state.favoritesSongs = state.favoritesSongs.filter((item) => action.payload.id !== item.id);
        }
    },
});

export const { addSong, deleteSong } = favoritesSlice.actions;
export default favoritesSlice.reducer;