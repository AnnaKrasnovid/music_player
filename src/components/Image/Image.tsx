import { memo } from 'react';
import { useSelector } from 'react-redux';

import ImagePlayer from '../../assets/images/images/cover.png';

import { ImageInt } from '../../types/ComponentsInt';

import styles from './Image.module.scss';

function Image({ isPlaySong }: ImageInt) {
    const { activeSong } = useSelector((state: any) => state.activeSong);

    return (
        <div className={styles['cover']}>
            <img
                src={activeSong.cover ? activeSong.cover : ImagePlayer}
                alt="Пластинка"
                className={`
                    ${styles['cover__img']} 
                    ${isPlaySong ? styles['cover__image_active'] : ''}
                `}
            />
        </div>
    )
};

export default memo(Image);