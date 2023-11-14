import Image from '../../assets/images/covers/adele.jpg';

import { CollectionInt } from '../../types/CollectionInt';

import styles from './Collection.module.scss';

interface CollectionItemInt {
    item: CollectionInt
}

function Collection({ item }: CollectionItemInt) {   
    return (
        <div className={` ${styles['collection']}`}>
            <div className={styles['collection__img']}>
                <img src={item.cover ? item.cover : Image} alt={`Обложка: ${item.name}`} />
            </div>
            <h2 className={styles['collection__title']}>
                {item.name}
            </h2>
        </div>
    );
};

export default Collection;