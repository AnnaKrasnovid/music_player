import { SongInt } from "./SongInt"

export interface CollectionsInt {
    closeModal: () => void,
    isActive: boolean
}

export interface CollectionInt {
    id: number,
    name: string,
    songs: Array<SongInt>,
    cover?: string
}