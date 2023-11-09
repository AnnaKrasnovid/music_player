import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Player from '../Player/Player';
import Header from '../Header/Header';

import { useActions } from '../../hooks/useActions';
import { useToggleVisibility } from '../../hooks/useToggleVisibillity';

import styles from './Layout.module.scss';

function Layout() {
    const { switchSong } = useActions();
    const { songs } = useSelector((state: any) => state.songs);
    const { activeSong } = useSelector((state: any) => state.activeSong);
    const {openModal, closeModal,isActive}=useToggleVisibility(false)
// console.log(isActive)
    useEffect(() => {
        switchSong({ song: songs[0] })
    }, [songs])

    useEffect(() => {
        console.log(activeSong, songs)
    }, [activeSong])

    return (
        <div className={styles['layout']}>
            {/* <Header callback={openModal}/> */}
            <main className={styles['layout__main']}>
                <div className={styles['layout__container']}>
                    <div className={styles['layout__grid']}>
                        {activeSong && <Player />}
                        {activeSong
                            ? (
                                // <div className={styles['layout__box']}>                                    
                                    <Outlet context={[closeModal,isActive]} />
                                // </div>
                            )
                            : <p>Нет данных </p>
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;