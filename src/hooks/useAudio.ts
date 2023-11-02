import { useCallback, useRef, useState } from 'react';

import { AudioInt } from '../types/AudioInt';
import { SongInt } from '../types/SongInt';

export function useAudio(songs: Array<SongInt>): AudioInt {
    const ref = useRef<HTMLAudioElement>();
    const [indexSong, setIndexSong] = useState<number>(0);
    const [isPlaySong, setIsPlaySong] = useState<boolean>(false);

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
            setIsPlaySong(true);
        }
    }, []);

    const pauseSong = useCallback(() => {
        if (ref.current) {
            ref.current.pause();
            setIsPlaySong(false);
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
        }
    }, []);

    return {
        ref,
        indexSong,
        isPlaySong,
        playSong,
        pauseSong,
        prevSong,
        nextSong,
        changeTime,
        changeVolume
    };
};