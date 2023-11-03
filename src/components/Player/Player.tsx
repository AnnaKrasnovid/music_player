import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Tools from '../Tools/Tools';
import Sound from '../Sound/Sound';
import Image from '../Image/Image';
import AudioTrack from '../AudioTrack/AudioTrack';
import HeadingSong from '../HeadingSong/HeadingSong';

import { useAudio } from '../../hooks/useAudio';
import { useActions } from '../../hooks/useActions';

import styles from './Player.module.scss';

function Player() {
    const { switchSong, getDuration, updateCurrentTime } = useActions();
    const { songs } = useSelector((state: any) => state.songs);
    const { activeSong } = useSelector((state: any) => state.activeSong);

    const {
        ref,
        isPlaySong,
        indexSong,
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

    const playNewSong = useCallback(() => {
        switchSong({ song: songs[indexSong] })
    }, [indexSong])

    const getSongDuration = () => {
        if (ref.current) {
            getDuration({ duration: ref.current.duration });
        }
    }

    useEffect(() => {
        playNewSong()
    }, [indexSong, playNewSong])

    useEffect(() => {
        if (isPlaySong) {
            playSong();
        }
    }, [activeSong, isPlaySong])

    return (
        <div className={`container ${styles['player']}`}>
            {activeSong &&
                <>
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
                        <Sound callback={changeVolume} />
                    </div>

                    <Tools
                        pauseSong={pauseSong}
                        playSong={playSong}
                        prevSong={prevSong}
                        nextSong={nextSong}
                        isPlaySong={isPlaySong}
                    />
                    <AudioTrack changeTime={changeTime} />
                </>
            }
        </div>
    )
};

export default memo(Player);