import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeSong: null,
    duration: 0,
    currentTime: 0,
    isPlaySong:false,
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
        changePlaybackSong(state, action) {
            state.isPlaySong = action.payload.isPlaySong;
            console.log(action.payload.isPlaySong)
        },
    },
});

export const { switchSong, getDuration, updateCurrentTime,changePlaybackSong } = activeSongSlice.actions;
export default activeSongSlice.reducer;