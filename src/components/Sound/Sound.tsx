import Input from '../../UI/Input/Input';
import Progress from '../../UI/Progress/Progress';

import styles from './Sound.module.scss';

function Sound() {
    return (
        <div className={styles['sound']}>
            <span className={styles['sound__icon']} />
            {/* <Progress progress={10} /> */}
            <span className={`${styles['sound__icon']} ${styles['sound__icon_type_volume']}`} />
        </div>
    )
};

export default Sound;