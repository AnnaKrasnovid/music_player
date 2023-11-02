import { memo } from 'react';

import Progress from '../../UI/Progress/Progress';

import { AudioTrackInt } from '../../types/ComponentsInt';

import styles from './AudioTrack.module.scss';

function AudioTrack({ duration, currentTime, changeTime }: AudioTrackInt) {
console.log(Math.round(currentTime))
    return (
        <div className={styles['audio']}>
            <p className={styles['audio__time']}>00:{Math.round(currentTime)}</p>
            <Progress
                callback={changeTime}
                currentProgress={currentTime}
                allProgress={duration}
                point={false}
            />
            <p className={`${styles['audio__time']} ${styles['audio__time_type_duration']}`} >
                {Math.round(duration * 10) / 10}
            </p>
        </div>
    )
};

export default memo(AudioTrack);