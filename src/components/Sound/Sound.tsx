import { memo } from 'react';
import Progress from '../../UI/Progress/Progress';

import { SoundInt } from '../../types/ComponentsInt';

import styles from './Sound.module.scss';

function Sound({ callback }: SoundInt) {
    return (
        <div className={styles['sound']}>
            <div className={styles['sound__box']}>
                {/* <span className={styles['sound__icon']} /> */}
                <Progress callback={callback} currentProgress={0.5} allProgress={1} />
                {/* <span className={`${styles['sound__icon']} ${styles['sound__icon_type_volume']}`} /> */}
            </div>
        </div>
    )
};

export default memo(Sound);