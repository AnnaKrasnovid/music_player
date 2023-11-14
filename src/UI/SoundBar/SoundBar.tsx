import styles from './SoundBar.module.scss';

function SoundBar() {
    return (
        <ul className={styles['bars']}>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
            <li className={styles['bars__item']}></li>
        </ul>
    );
}

export default SoundBar;