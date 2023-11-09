import AudioOne from '../audio/adventure.mp3';
import AudioTwo from '../audio/allthat.mp3';
import AudioThree from '../audio/elevate.mp3';
import AudioFour from '../audio/hey.mp3';

import Img from '../images/covers/adele.jpg'

import { SongInt } from '../../types/SongInt';

export const songs: Array<SongInt> = [  
    {
        id: 1,
        audio: AudioOne,
        author: 'Benjamin Tissot',
        title: 'Adventure',
        cover: Img
    },
    {
        id: 2,
        audio: AudioTwo,
        author: 'Benjamin Tissot',
        title: 'Allthat',
        cover: '',
    },
    {
        id: 3,
        audio: AudioThree,
        author: 'Benjamin Tissot',
        title: 'Elevate',
        cover: ''
    },
    {
        id: 4,
        audio: AudioFour,
        author: 'Benjamin Tissot',
        title: 'Hey',
        cover: ''
    },
]

export const songs_two: Array<SongInt> = [  
    {
        id: 1,
        audio: AudioOne,
        author: 'Benjamin Tissot',
        title: 'Adventure',
        cover: Img
    },    
]