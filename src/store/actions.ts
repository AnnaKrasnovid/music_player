import { changeSongsList } from './reducers/songsSlice';
import { switchSong, getDuration, updateCurrentTime } from './reducers/activeSongSlice';
import { addSong, deleteSong } from './reducers/favoritesSlice';
import { addPlaylist } from './reducers/playlistsSlice';

export {
    changeSongsList,
    switchSong,
    getDuration,
    updateCurrentTime,
    addSong,
    deleteSong,
    addPlaylist
}