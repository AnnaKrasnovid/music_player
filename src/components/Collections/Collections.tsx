import { useSelector } from 'react-redux';

import SideBox from '../SideBox/SideBox';
import CollectionsList from '../CollectionsList/CollectionsList';

import { useActions } from '../../hooks/useActions';
import { CollectionsInt,CollectionInt } from '../../types/CollectionInt';

function Collections({ closeModal, isActive }: CollectionsInt) {
    const { changeSongsList } = useActions();
    const { favoritesSongs } = useSelector((state: any) => state.favorites);
    const { playlists } = useSelector((state: any) => state.playlists);

    const collectionsData: Array<CollectionInt> = [
        ...playlists,
        {
            id: 2,
            name: 'favorites',
            songs: favoritesSongs
        },
    ]

    const changePlaylist = (id: number) => {
        const list = collectionsData.find((item) => item.id === id)
        if (list) {
            changeSongsList({ songs: list.songs })
        }
    }

    return (
        <SideBox closeModal={closeModal} isActive={isActive}>
            <CollectionsList list={collectionsData} callback={changePlaylist} />
        </SideBox>
    );
};

export default Collections;