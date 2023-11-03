import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeSong: null,
    duration: 0,
    currentTime: 0,
}

const activeSongSlice = createSlice({
    name: 'activeSong',
    initialState,
    reducers: {
        switchSong(state, action) {
            state.activeSong = action.payload.song;
        },
        getDuration(state, action) {
            state.duration = action.payload.duration;
        },
        updateCurrentTime(state, action) {
            state.currentTime = action.payload.currentTime;
        },
    },
});

export const { switchSong, getDuration, updateCurrentTime } = activeSongSlice.actions;
export default activeSongSlice.reducer;