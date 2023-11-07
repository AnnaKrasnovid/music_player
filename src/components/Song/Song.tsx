import { useSelector } from 'react-redux/es/hooks/useSelector';

import Cover from '../../assets/images/images/cover.png';
import styles from './Song.module.scss';

function Song({ item }: any) {
    const { activeSong } = useSelector((state: any) => state.activeSong);

    return (
        <div className={`${styles['song']} ${activeSong.id === item.id ? styles['song_active'] : ''}`}>
            <div className={styles['song__img']}>
                <img
                    src={item.cover ? item.cover : Cover}
                    alt={`Изображение к '${item.title}', ${item.author}`}
                />
            </div>
            <div className={styles['song__info']}>
                <h2 className={styles['song__title']}> {item.author}</h2>
                <p className={styles['song__text']}>{item.title}</p>
            </div>
            <div className={styles['song__box']}>
                Здесь будет анимация
            </div>
        </div>
    );
};

export default Song;