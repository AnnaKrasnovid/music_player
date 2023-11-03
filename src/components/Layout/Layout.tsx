import Player from '../Player/Player';

import { LayoutInt } from '../../types/ComponentsInt';

import styles from './Layout.module.scss';

function Layout({ children }: LayoutInt) {
    return (
        <main className={styles['main']}>
            <div className={styles['player-page']}>
                <div className={styles['player-page__container']}>
                    <Player />
                    {children}
                </div>
            </div>           
        </main>
    );
};

export default Layout;