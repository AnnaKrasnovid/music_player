import { memo } from 'react';

import Progress from '../../UI/Progress/Progress';
import Sound from '../Sound/Sound';

import { PlayerBodyInt } from '../../types/ComponentsInt';

import styles from './PlayerBody.module.scss';

function PlayerBody(props: PlayerBodyInt) {
    const { song, isPlaySong, currentTime, duration, changeVolume, changeTime } = props;

    return (
        <div className={styles['player-body']}>
            <Sound callback={changeVolume} />
            <h1 className={styles['player-body__title']}>
                {song.author} - {song.title}
            </h1>   
            {isPlaySong && (
                <Progress
                    callback={changeTime}
                    currentProgress={currentTime}
                    allProgress={duration}
                    point={false}
                />
            )}
        </div>
    )
};

export default memo(PlayerBody);