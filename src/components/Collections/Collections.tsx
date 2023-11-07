import { useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ButtonClose from '../../UI/ButtonClose/ButtonClose';

import Image from '../../assets/images/covers/adele.jpg'

import { useActions } from '../../hooks/useActions';

import styles from './Collections.module.scss';

function Collections({closeModal, isActive}:any) {
    const { changeSongsList } = useActions();
    const { songs } = useSelector((state: any) => state.songs);
    const { favoritesSongs } = useSelector((state: any) => state.favorites);
    const { playlists } = useSelector((state: any) => state.playlists);
   
    
    const collectionsData = [
        ...playlists,
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        // {
        //     id: 2,
        //     name: 'favorites',
        //     songs: favoritesSongs
        // },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },

    ]
    const changePlaylist = (id: number) => {
        const list = collectionsData.find((item) => item.id === id)
        changeSongsList({ songs: list.songs })
    }

    return (
        <div className={`container  ${styles['collections']} ${isActive ? styles['collections_active'] : ''}`}>
            <ButtonClose closeModal={closeModal}/>
            <ul className={`scroll ${styles['collections-list']}`}>
                {collectionsData.map((item, index) => (
                    <li key={item.id}>
                        <Link to={`/list/${item.id}`} onClick={() => changePlaylist(item.id)} className='link'>
                            <div className={` ${styles['collection']}`}>
                                <div className={styles['collection__img']}>
                                    <img src={item.cover ? item.cover : Image} alt={`Обложка: ${item.name}`} />
                                </div>
                                <h2 className={styles['collection__title']}>
                                    {item.name}
                                </h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Collections;