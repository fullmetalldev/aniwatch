import {atom} from 'recoil';

export const topList = atom({
    key: 'listOfTop',
    default: [],
});


export const randomAnimeState = atom({
    key: "takeRandomAnime",
    default: []
});

