import { ComponentProps, ElementType, ReactNode } from 'react';
import { SongInt } from "./SongInt";

export interface SoundInt {
    callback: (seconds: number) => void
}

export interface ImageInt {
    isPlaySong: boolean,
    cover?: string |undefined
}

export interface ToolsInt {
    prevSong: () => void,
    nextSong: () => void,
    pauseSong: () => void,
    playSong: () => void,
    isPlaySong: boolean,
    currentTime: number
}

export interface ButtonInt {
    type: 'prev' | 'play' | 'pause' | 'next' | 'volume' | 'arrows',
    callback: () => void
}

export interface ProgressInt {
    point?: boolean,
    callback?: (progress: number) => void,
    currentProgress: number,// текущая длинна прогресс бара, пересчитается в %
    allProgress: number // вся длинна прогресс бара, пересчитается в %
}

export interface PlayerBodyInt {
    song: SongInt,
    changeVolume: (seconds: number) => void,
}

export interface LayoutInt {
    children: ReactNode
}

export interface AudioTrackInt {
    currentTime: number,
    duration: number,
    changeTime: (volume: number) => void,
}
