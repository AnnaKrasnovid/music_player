import { useSelector } from 'react-redux';

import Song from '../Song/Song';
import Animation from '../Animation/Animation';

import { SongInt } from '../../types/SongInt';
import { useActions } from '../../hooks/useActions';

import styles from './Songs.module.scss';

function Songs({isActive}:any) {
    const { switchSong } = useActions();
    const { songs } = useSelector((state: any) => state.songs);

    const handleClickSong = (id: number) => {
        const song = songs.find((item: SongInt) => item.id === id)
        switchSong({ song })
    }

    return (
      
        <div className={` ${styles['songs'] } ${isActive? styles['songs_inactive']:''}`}>
            <ul className={`scroll ${styles['songs-list']} ${isActive? styles['songs-list_inactive']:''}`}>
                {songs.map((item: SongInt, index: number) => (
                    <Animation
                        as='li'
                        key={item.id}
                        callback={() => handleClickSong(item.id)}
                        elements={songs.length}
                        index={index}
                        animationName='animation-position'
                        delay={0.2}
                    >
                        <Song item={item} />
                    </Animation>
                ))}
            </ul>
        </div>
    );
};

export default Songs;