export interface AudioInt {
    ref: any,
    indexSong: number,
    isPlaySong: boolean,
    playSong: () => void,
    pauseSong: () => void,
    prevSong: () => void,
    nextSong: () => void,
    changeVolume: (seconds: number) => void,
    changeTime: (volume: number) => void,
}