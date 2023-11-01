import Button from '../../UI/Button/Button';

import styles from './Tools.module.scss';

interface ToolsInt {
    prevSong: () => void,
    nextSong: () => void,
    pauseSong: () => void,
    playSong: () => void,
    isPlaySong: boolean
}

function Tools({ prevSong, nextSong, pauseSong, playSong, isPlaySong }: ToolsInt) {
    return (
        <div className={styles['tools']}>
            <Button type='prev' callback={prevSong} />
            <Button type='play' callback={isPlaySong ? pauseSong : playSong} />
            <Button type='next' callback={nextSong} />
        </div>
    )
}

export default Tools;