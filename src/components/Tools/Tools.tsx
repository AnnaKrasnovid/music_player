import { memo,useState } from 'react';
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux';

import { ToolsInt } from '../../types/ComponentsInt';

import styles from './Tools.module.scss';

function Tools({ prevSong, nextSong, pauseSong, playSong, isPlaySong }: ToolsInt) {
    const { currentTime } = useSelector((state: any) => state.activeSong);

    return (
        <div className={styles['tools']}>
            <Button type='arrows' callback={prevSong} />
            <div className={styles['tools__switches']}>
                <Button type='prev' callback={prevSong} />
                <Button
                    type={isPlaySong ? 'pause'  : 'play'}
                    callback={isPlaySong ? pauseSong : playSong}
                />
                <Button type='next' callback={nextSong} />
            </div>
            <Button type='volume' callback={prevSong} />
        </div>
    )
};

export default memo(Tools);