import { useEffect, useState } from 'react';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Sound from '../Sound/Sound';

import { songs } from '../../assets/appData/songs';
import { useAudio } from '../../hooks/useAudio';
import Progress from '../../UI/Progress/Progress';

import styles from './Player.module.scss';


function Player() {
    const {
        ref,
        isPlaySong,
        indexSong,
        playSong,
        pauseSong,
        prevSong,
        nextSong
    } = useAudio(songs);
    const [song, setSong] = useState(songs[0]);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progressTime, setProgressTime] = useState(0);

    function updateProgress(e: any) {
        setDuration(ref.current.duration)
        setCurrentTime(ref.current.currentTime)
        // console.log(ref)
    }

    function changeTime(seconds:number) {
        ref.current.currentTime=seconds
    }

    useEffect(() => {
        setSong(songs[indexSong])
    }, [indexSong])

    useEffect(() => {
        if (isPlaySong) {
            playSong()
        }
    }, [song])

    useEffect(() => {
        // setProgressTime(currentTime * 100 / duration)
    }, [currentTime])

    return (
        <div className={styles['player']}>
            <div className={styles['player__tools']}>
                <Button type='prev' callback={prevSong} />
                <Button type='play' callback={isPlaySong ? pauseSong : playSong} />
                <Button type='next' callback={nextSong} />
            </div>
            <div className={styles['player__body']}>
                <Sound />

                <div>
                    <p>{song.author} {song.title}</p>
                    <audio src={song.audio} ref={ref} onTimeUpdate={(e) => updateProgress(e)} onEnded={nextSong }/>
                </div>
                <div className={styles['track']}>
                    <Progress callback={changeTime} currentProgress={currentTime} point={true} allProgress={duration} />
                </div>
            </div>

            <div className={styles['player__img']}>
                {/* <img src={ImagePlayer} alt="" className={styles['img']}/> */}
            </div>
        </div>
    )
}

export default Player;