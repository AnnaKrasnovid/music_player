export interface AudioInt {
    ref: any,
    indexSong: number,
    // isPlaySong: boolean,
    volume:number,
    playSong: () => void,
    pauseSong: () => void,
    prevSong: () => void,
    nextSong: () => void,
    changeVolume: (seconds: number) => void,
    changeTime: (volume: number) => void,
}