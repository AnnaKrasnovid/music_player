import { ComponentProps, ElementType, ReactNode } from 'react';
import { SongInt } from "./SongInt";

export interface SoundInt {
    callback: (seconds: number) => void
}

export interface ImageInt {
    isPlaySong: boolean
}

export interface ToolsInt {
    prevSong: () => void,
    nextSong: () => void,
    pauseSong: () => void,
    playSong: () => void,
    isPlaySong: boolean
}

export interface ButtonInt {
    type: 'prev' | 'play' | 'pause' | 'next',
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
    isPlaySong: boolean,
    currentTime: number,
    duration: number,
    changeVolume: (seconds: number) => void,
    changeTime: (volume: number) => void,
}

export interface LayoutInt {
    children: ReactNode
}
