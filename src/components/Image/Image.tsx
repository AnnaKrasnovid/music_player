import ImagePlayer from '../../assets/images/images/risian.png';

import styles from './Image.module.scss';

interface ImageInt {
    isPlaySong: boolean
}

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
}

export default Image;