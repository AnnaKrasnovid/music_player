import { memo } from 'react';
import ImagePlayer from '../../assets/images/images/308472811143211.png';

import { ImageInt } from '../../types/ComponentsInt';

import styles from './Image.module.scss';

function Image({ isPlaySong, cover }: ImageInt) {
    return (
        <div className={styles['cover']}>
            <img
                src={cover? cover:ImagePlayer}
                alt="Пластинка"
                className={`
                    ${styles['cover__img']} 
                    // ${isPlaySong ? styles['cover__image_active'] : ''}
                `}
            />
        </div>
    )
};

export default memo(Image);