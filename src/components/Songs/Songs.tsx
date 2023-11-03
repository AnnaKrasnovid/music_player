import { useSelector } from 'react-redux';

import Song from '../Song/Song';

import { SongInt } from '../../types/SongInt';
import { useActions } from '../../hooks/useActions';

import styles from './Songs.module.scss';

function Songs() {
    const { switchSong } = useActions();
    const { songs } = useSelector((state: any) => state.songs);

    const handleClickSong = (id: number) => {
        const song = songs.find((item: SongInt) => item.id === id)       
        switchSong({ song })
    }
   
    return (
        <div className={`container ${styles['songs']}`}>
            <ul className={styles['songs-list']}>
                {songs.map((item: SongInt) => (
                    <li key={item.id} onClick={() => handleClickSong(item.id)}>
                        <Song item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Songs;