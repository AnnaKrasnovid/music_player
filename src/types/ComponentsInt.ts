import { ComponentProps, ElementType, ReactNode } from 'react';
import { SongInt } from "./SongInt";

export interface SoundInt {
    callback: (seconds: number) => void
}

export interface ImageInt {
    isPlaySong: boolean,   
}

export interface ToolsInt {
    prevSong: () => void,
    nextSong: () => void,
    pauseSong: () => void,
    playSong: () => void,
    changeVolume: (progress: number) => void,
    isPlaySong: boolean,  
    volume?:number 
}

export interface ButtonInt {
    type: 'prev' | 'play' | 'pause' | 'next' | 'volume' | 'arrows',
    callback: () => void
}

export interface ButtonIconInt {
    type: 'like' | 'list',
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
    changeTime: (volume: number) => void,
}
