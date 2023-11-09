import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './reducers/songsSlice';
import activeSongReducer from './reducers/activeSongSlice';
import favoritesReducer from './reducers/favoritesSlice';
import playlistReducer from './reducers/playlistsSlice';

export default configureStore({
    reducer: {
        songs: songsReducer,
        activeSong:activeSongReducer,
        favorites: favoritesReducer,
        playlists: playlistReducer,
    }
})