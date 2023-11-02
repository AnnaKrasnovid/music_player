import styles from './Layout.module.scss';

import { LayoutInt } from '../../types/ComponentsInt';

function Layout({ children }: LayoutInt) {
    return (
        <main className={styles['main']}>
            {children}
        </main>
    );
};

export default Layout;