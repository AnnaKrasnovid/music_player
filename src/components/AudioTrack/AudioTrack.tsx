import { memo } from 'react';
import { useSelector } from 'react-redux';

import Progress from '../../UI/Progress/Progress';

import { AudioTrackInt } from '../../types/ComponentsInt';
import { getTime } from '../../helpers/getTime/getTime';
import { getCurrentTime } from '../../helpers/getCurrentTime/getCurrentTime';

import styles from './AudioTrack.module.scss';

function AudioTrack({ changeTime }: AudioTrackInt) {
    const { duration, currentTime } = useSelector((state: any) => state.activeSong);

    return (
        <div className={styles['audio']}>
            <p className={styles['audio__time']}>
                {getCurrentTime(currentTime)}
            </p>
            <Progress
                callback={changeTime}
                currentProgress={currentTime}
                allProgress={duration}
                point={false}
            />
            <p className={`${styles['audio__time']} ${styles['audio__time_type_duration']}`} >
                {getTime(duration)}
            </p>
        </div>
    )
};

export default memo(AudioTrack);