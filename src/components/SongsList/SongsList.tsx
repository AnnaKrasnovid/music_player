import Song from '../Song/Song';
import Animation from '../Animation/Animation';

import { SongInt } from '../../types/SongInt';

import styles from './SongsList.module.scss';

interface SongsListInt {
    list: Array<SongInt>,
    callback: (id: number) => void,
    isActive: boolean
}

function SongsList({ list, callback, isActive }: SongsListInt) {
    return (
        <ul className={`scroll ${styles['songs-list']} ${isActive ? styles['songs-list_inactive'] : ''}`}>
            {list.map((item, index) => (
                <Animation
                    as='li'
                    key={item.id}
                    callback={() => callback(item.id)}
                    elements={list.length}
                    index={index}
                    animationName='animation-position'
                    delay={0.2}
                >
                    <Song item={item} />
                </Animation>
            ))}
        </ul>
    );
};

export default SongsList;