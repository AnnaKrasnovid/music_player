import { memo } from 'react';

import styles from './HeadingSong.module.scss';

interface HeadingSongInt {
    author: string,
    title: string,
}

function HeadingSong({author, title}: HeadingSongInt) {

    return (
        <div className={styles['heading']}>
            <h1 className={styles['heading__name']}>
                {author}
            </h1>
            <p className={styles['heading__title']}>{title}</p>
        </div>
    )
};

export default memo(HeadingSong);