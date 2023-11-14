import Tabs from '../../UI/Tabs/Tabs';
import Songs from '../Songs/Songs';
import Collections from '../Collections/Collections';

import styles from './Content.module.scss';

function Content() {
    const labels = ['list', 'lists', 'search']
    const content = [
        // <Songs />,
        // <Collections />,
        <div></div>,
    ]

    return (
        <div className={styles['content']}>
            <Tabs labels={labels} tabContent={content} />
        </div>
    );
};

export default Content;