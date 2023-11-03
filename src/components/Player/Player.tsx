import { memo, useCallback, useEffect, useState } from 'react';

import Tools from '../Tools/Tools';
import Sound from '../Sound/Sound';
import Image from '../Image/Image';
import AudioTrack from '../AudioTrack/AudioTrack';
import HeadingSong from '../HeadingSong/HeadingSong';

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

    const updateProgress = () => {
        setDuration(ref.current.duration);
        setCurrentTime(ref.current.currentTime);
    };

    const playNewSong = useCallback(() => {
        setSong(songs[indexSong])
    }, [indexSong])

    useEffect(() => {
        playNewSong()
    }, [indexSong, playNewSong])

    useEffect(() => {
        if (isPlaySong) {
            playSong();
        }
    }, [song, isPlaySong])

    return (
        <div className={styles['player']}>
            <audio
                ref={ref}
                src={song.audio}
                onTimeUpdate={updateProgress}
                onEnded={nextSong}
            />
            <Image
                isPlaySong={isPlaySong}
                cover={song.cover}
            />

          
            
          <div className={styles['player__box']}>
          <HeadingSong
                author={song.author}
                title={song.title}
            />
          <Sound callback={changeVolume} />
          </div>
                
            

            <Tools
                pauseSong={pauseSong}
                playSong={playSong}
                prevSong={prevSong}
                nextSong={nextSong}
                isPlaySong={isPlaySong}
                currentTime={currentTime}
            />
            <AudioTrack
                duration={duration}
                currentTime={currentTime}
                changeTime={changeTime}
            />


        </div>
    )
};

export default memo(Player);