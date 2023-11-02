import { memo } from 'react';
import ImagePlayer from '../../assets/images/images/risian.png';

import { ImageInt } from '../../types/ComponentsInt';

import styles from './Image.module.scss';

function Image({ isPlaySong }: ImageInt) {
    return (
        <div className={styles['player-img']}>
            <img
                src={ImagePlayer}
                alt="Пластинка"
                className={`
                    ${styles['img']} 
                    ${isPlaySong ? styles['img_active'] : ''}
                `}
            />
        </div>
    )
};

export default memo(Image);