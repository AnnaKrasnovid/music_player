import { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './HeadingSong.module.scss';

function HeadingSong() {
    const { activeSong } = useSelector((state: any) => state.activeSong);

    return (
        <div className={styles['heading']}>
            <h1 className={styles['heading__name']}>
                {activeSong.author}
            </h1>
            <p className={styles['heading__title']}>{activeSong.title}</p>
        </div>
    )
};

export default memo(HeadingSong);