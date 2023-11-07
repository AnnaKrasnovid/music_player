import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Tools from '../Tools/Tools';

import Image from '../Image/Image';
import AudioTrack from '../AudioTrack/AudioTrack';
import HeadingSong from '../HeadingSong/HeadingSong';
import Like from '../../UI/Like/Like';

import { useAudio } from '../../hooks/useAudio';
import { useActions } from '../../hooks/useActions';
import { SongInt } from '../../types/SongInt';

import styles from './Player.module.scss';

function Player() {
    const { switchSong, getDuration, updateCurrentTime, addSong, deleteSong } = useActions();
    const { songs } = useSelector((state: any) => state.songs);
    const { activeSong } = useSelector((state: any) => state.activeSong);

    const {
        ref,
        isPlaySong,
        indexSong,
        volume,
        playSong,
        pauseSong,
        prevSong,
        nextSong,
        changeTime,
        changeVolume,
    } = useAudio(songs);

    const updateProgress = () => {
        updateCurrentTime({ currentTime: ref.current.currentTime })
    };

    const changeActiveSong = useCallback(() => {
        switchSong({ song: songs[indexSong] });
    }, [indexSong])

    const getSongDuration = () => {
        if (ref.current) {
            getDuration({ duration: ref.current.duration });
        }
    }

    const addInFavorites = (id: number) => {
        const song = songs.find((item: SongInt) => item.id === id);
        addSong({ song });
    }

    const deleteFromFavorites = (id: number) => {
        deleteSong({ id });
    }

    useEffect(() => {
        if (activeSong) {
            changeActiveSong()
        }
    }, [indexSong, changeActiveSong])

    useEffect(() => {
        if (isPlaySong) {
            playSong();
        }
    }, [activeSong, isPlaySong])

    return (
        <div className={`container ${styles['player']}`}>
            <audio
                ref={ref}
                src={activeSong.audio}
                onLoadedMetadata={getSongDuration}
                onTimeUpdate={updateProgress}
                onEnded={nextSong}
            />
            <Image isPlaySong={isPlaySong} />
            <div className={styles['player__box']}>
                <HeadingSong />
                {/* <Like type='like' callback={() => deleteFromFavorites(activeSong.id)} /> */}
            </div>
            <Tools
                pauseSong={pauseSong}
                playSong={playSong}
                prevSong={prevSong}
                nextSong={nextSong}
                changeVolume={changeVolume}
                isPlaySong={isPlaySong}
                volume={volume}
            />
            <AudioTrack changeTime={changeTime} />
        </div>
    )
};

export default memo(Player);