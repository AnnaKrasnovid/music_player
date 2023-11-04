import { memo, useEffect, useState } from 'react';

import Button from '../../UI/Button/Button';
import Sound from '../Sound/Sound';
import Tooltip from '../Tooltip/Tooltip';

import { ToolsInt } from '../../types/ComponentsInt';
import { useToggleVisibility } from '../../hooks/useToggleVisibillity';

import styles from './Tools.module.scss';

function Tools({ prevSong, nextSong, pauseSong, playSong, changeVolume, isPlaySong, volume }: ToolsInt) {
    const { ref, isActive, openModal, closeModal } = useToggleVisibility(false);

    useEffect(() => {
        const timer = setTimeout(() => closeModal(), 500);
        return () => { clearTimeout(timer) };
    }, [volume])

    return (
        <div className={styles['tools']} >
            <Button type='arrows' callback={prevSong} />
            <div className={styles['tools__switches']}>
                <Button type='prev' callback={prevSong} />
                <Button
                    type={isPlaySong ? 'pause' : 'play'}
                    callback={isPlaySong ? pauseSong : playSong}
                />
                <Button type='next' callback={nextSong} />
            </div>
            <Button type='volume' callback={openModal} />
            <Tooltip isOpen={isActive} refElement={ref}>
                <Sound callback={changeVolume} />
            </Tooltip>
        </div>
    )
};

export default memo(Tools);