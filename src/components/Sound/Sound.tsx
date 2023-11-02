import { memo } from 'react';
import Progress from '../../UI/Progress/Progress';

import { SoundInt } from '../../types/ComponentsInt';

import styles from './Sound.module.scss';

function Sound({ callback }: SoundInt) {
    return (
        <div className={styles['sound']}>
            <span className={styles['sound__icon']} />
            <Progress callback={callback} currentProgress={0.7} allProgress={1} />
            <span className={`${styles['sound__icon']} ${styles['sound__icon_type_volume']}`} />
        </div>
    )
};

export default memo(Sound);