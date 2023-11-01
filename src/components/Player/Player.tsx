import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Sound from '../Sound/Sound';

import ImagePlayer from '../../assets/images/risian.png'
import AudioOne from '../../assets/audio/Max Richter Whispers.mp3'

import { songs } from '../../assets/appData/songs';
import { useAudio } from '../../hooks/useAudio';

import styles from './Player.module.scss';
import { useEffect, useRef, useState } from 'react';

function Player() {
   const  { ref, isPlaySong,indexSong, playSong, pauseSong, prevSong, nextSong } =useAudio(songs)
    // const [indexSong, setIndexSong] = useState(0)
  const [song, setSong] = useState(songs[0]);
    // const [isPlaySong, setIsPlaySong] = useState(false);
    // const audioRef = useRef<any>();

    // function handleClickPrevSong() {
    //     if (indexSong === 0) {
    //         setIndexSong(songs.length - 1)
    //     } else {
    //         setIndexSong(prev => prev - 1)
    //     }       
    // }

    // function handleClickNextSong() {
    //     if (indexSong === songs.length - 1) {
    //         setIndexSong(0)            
    //     } else {
    //         setIndexSong(prev => prev + 1)            
    //     }     
    // }

    // function playSong() {
    //     audioRef.current.play();
    //     setIsPlaySong(true);
    // }

    // function pausedSong() {
    //     audioRef.current.pause();
    //     setIsPlaySong(false);
    // }

    // useEffect(() => {
    //     setSong(songs[indexSong]) 
    // }, [indexSong])

    // useEffect(() => {
    //     if(isPlaySong) {
    //         playSong()
    //     }
    // }, [song])
    useEffect(() => {
        setSong(songs[indexSong]) 
    }, [indexSong])

    useEffect(() => {
        if(isPlaySong) {
            playSong()
        }
    }, [song])
    
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
                    <audio src={song.audio} ref={ref} />
                </div>
                <div className={styles['track']}>
                    <Input />
                </div>
            </div>

            <div className={styles['player__img']}>
                {/* <img src={ImagePlayer} alt="" className={styles['img']}/> */}
            </div>
        </div>
    )
}

export default Player;