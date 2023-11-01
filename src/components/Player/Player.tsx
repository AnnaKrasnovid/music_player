import { useEffect, useState } from 'react';

import Tools from '../Tools/Tools';
import Progress from '../../UI/Progress/Progress';
import Sound from '../Sound/Sound';
import Image from '../Image/Image';

import ImagePlayer from '../../assets/images/images/risian.png';

import { songs } from '../../assets/appData/songs';
import { useAudio } from '../../hooks/useAudio';

import styles from './Player.module.scss';

function Player() {
    const {
        ref,
        isPlaySong,
        indexSong,
        playSong,
        pauseSong,
        prevSong,
        nextSong,
        changeTime,
        changeVolume
    } = useAudio(songs);
    const [song, setSong] = useState(songs[0]);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    function updateProgress(e: any) {
        setDuration(ref.current.duration);
        setCurrentTime(ref.current.currentTime);
    }

    useEffect(() => {
        setSong(songs[indexSong]);
    }, [indexSong])

    useEffect(() => {
        if (isPlaySong) {
            playSong();
        }
    }, [song])

    return (
        <div className={styles['player']}>
            <Tools
                pauseSong={pauseSong}
                playSong={playSong}
                prevSong={prevSong}
                nextSong={nextSong}
                isPlaySong={isPlaySong}
            />
            <div className={styles['player-body']}>
                <Sound callback={changeVolume} />
                <h1 className={styles['player-body__title']}>
                    {song.author} - {song.title}
                </h1>
                <audio
                    ref={ref}
                    src={song.audio}
                    onTimeUpdate={updateProgress}
                    onEnded={nextSong}
                />
                {isPlaySong && <Progress
                    callback={changeTime}
                    currentProgress={currentTime}
                    allProgress={duration}
                    point={false}
                />}
            </div>
           <Image isPlaySong={isPlaySong}/>
        </div>
    )
}

export default Player;