import Input from '../../UI/Input/Input';

import styles from './Sound.module.scss';

function Sound() {
    return (
        <div className={styles['sound']}>
            <span className={styles['sound__icon']} />
            <Input />
            <span className={`${styles['sound__icon']} ${styles['sound__icon_type_volume']}`} />
        </div>
    )
};

export default Sound;