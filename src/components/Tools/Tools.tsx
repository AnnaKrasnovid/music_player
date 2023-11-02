import { memo } from 'react';
import Button from '../../UI/Button/Button';

import { ToolsInt } from '../../types/ComponentsInt';

import styles from './Tools.module.scss';

function Tools({ prevSong, nextSong, pauseSong, playSong, isPlaySong,currentTime }: ToolsInt) {
    // console.log(currentTime)

    return (
        <div className={styles['tools']}>
            <Button type='arrows' callback={prevSong} />
            <div className={styles['tools__switches']}>
                <Button type='prev' callback={prevSong} />
                <Button
                    type={isPlaySong ? 'play' : 'pause'}
                    callback={isPlaySong  ? pauseSong : playSong}
                />
                <Button type='next' callback={nextSong} />
            </div>
            <Button type='volume' callback={prevSong} />
        </div>
    )
};

export default memo(Tools);