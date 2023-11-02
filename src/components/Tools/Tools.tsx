import { memo } from 'react';
import Button from '../../UI/Button/Button';

import { ToolsInt } from '../../types/ComponentsInt';

import styles from './Tools.module.scss';

function Tools({ prevSong, nextSong, pauseSong, playSong, isPlaySong }: ToolsInt) {
    return (
        <div className={styles['tools']}>
            <Button type='prev' callback={prevSong} />
            <Button type='play' callback={isPlaySong ? pauseSong : playSong} />
            <Button type='next' callback={nextSong} />
        </div>
    )
};

export default memo(Tools);