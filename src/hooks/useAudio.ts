import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


import { AudioInt } from '../types/AudioInt';
import { SongInt } from '../types/SongInt';
import { useActions } from '../hooks/useActions';

export function useAudio(songs: Array<SongInt>): AudioInt {
    const ref = useRef<HTMLAudioElement>();
    const { changePlaybackSong } = useActions();
    const [indexSong, setIndexSong] = useState<number>(0);
    // const [isPlaySong, setIsPlaySong] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.5);

    const prevSong = useCallback(() => {
        if (indexSong === 0) {
            setIndexSong(songs.length - 1);
        } else {
            setIndexSong(prev => prev - 1);
        }
    }, [indexSong]);

    const nextSong = useCallback(() => {
        if (indexSong === songs.length - 1) {
            setIndexSong(0);
        } else {
            setIndexSong(prev => prev + 1);
        }
    }, [indexSong]);

    const playSong = useCallback(() => {
        if (ref.current) {
            ref.current.play();
            // setIsPlaySong(true);
            changePlaybackSong({ isPlaySong: true });
        }
    }, []);

    const pauseSong = useCallback(() => {
        if (ref.current) {
            ref.current.pause();
            // setIsPlaySong(false);
            changePlaybackSong({ isPlaySong: false });           
        }
    }, []);
    const changeTime = useCallback((seconds: number) => {
        if (ref.current) {
            ref.current.currentTime = seconds;
        }
    }, []);

    const changeVolume = useCallback((volume: number) => {
        if (ref.current) {
            ref.current.volume = volume;
            setVolume(volume);
        }
    }, []);

    useEffect(() => {
        if (ref.current) {
            changeVolume(volume);
        }
    }, [ref.current])

    return {
        ref,
        indexSong,
        // isPlaySong,
        volume,
        playSong,
        pauseSong,
        prevSong,
        nextSong,
        changeTime,
        changeVolume,
    };
};