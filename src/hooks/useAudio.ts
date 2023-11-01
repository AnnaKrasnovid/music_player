import { useRef, useState } from 'react';

interface AudioInt {
    ref: any,
    indexSong: number,
    isPlaySong: boolean,
    playSong: () => void,
    pauseSong: () => void,
    prevSong: () => void,
    nextSong: () => void
}

export function useAudio(songs: Array<any>): AudioInt {
    const ref = useRef<any>();
    const [indexSong, setIndexSong] = useState(0);
    const [isPlaySong, setIsPlaySong] = useState<boolean>(false);

    function prevSong() {

        if (indexSong === 0) {
            setIndexSong(songs.length - 1);
        } else {
            setIndexSong(prev => prev - 1);
        }
    }

    function nextSong() {
        if (indexSong === songs.length - 1) {
            setIndexSong(0);
        } else {
            setIndexSong(prev => prev + 1);
        }
    }

    function playSong() {
        ref.current.play();
        setIsPlaySong(true);
    }

    function pauseSong() {
        ref.current.pause();
        setIsPlaySong(false);
    }

    return { ref, indexSong, isPlaySong, playSong, pauseSong, prevSong, nextSong };
};