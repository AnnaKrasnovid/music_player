import { useSelector } from 'react-redux';

import SongsList from '../SongsList/SongsList';

import { SongInt } from '../../types/SongInt';
import { useActions } from '../../hooks/useActions';

import styles from './Songs.module.scss';

interface SongsInt {
    isActive: boolean
}

function Songs({ isActive }: SongsInt) {
    const { switchSong } = useActions();
    const { songs } = useSelector((state: any) => state.songs);

    const handleClickSong = (id: number) => {
        const song = songs.find((item: SongInt) => item.id === id)
        switchSong({ song })
    }

    return (
        <div className={` ${styles['songs']} ${isActive ? styles['songs_inactive'] : ''}`}>
            <SongsList list={songs} callback={handleClickSong} isActive={isActive} />
        </div>
    );
};

export default Songs;