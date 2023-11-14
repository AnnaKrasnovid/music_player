import { Link } from 'react-router-dom';

import Collection from '../Collection/Collection';

import { CollectionInt } from '../../types/CollectionInt';

import styles from './CollectionsList.module.scss';

interface CollectionsListInt {
    list: Array<CollectionInt>,
    callback: (id: number) => void
}

function CollectionsList({ list, callback }: CollectionsListInt) {
    return (
        <ul className={`scroll ${styles['collections-list']}`}>
            {list.map((item) => (
                <li key={item.id}>
                    <Link to={`/list/${item.id}`} onClick={() => callback(item.id)} className='link'>
                        <Collection item={item} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CollectionsList;