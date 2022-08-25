import { GENRES, GENRES_FILTER, GET_DETAIL } from "../../constants/Constants";
import data from '../../constants/videos.json';
import info from '../../constants/info.json';

export function genres(){
    return{
        type:GENRES,
        payload:data
    }
}

export function genresFilter(genre){
    let filter =  data.filter(g=>g.name===genre)
    return {
        type:GENRES_FILTER,
        payload:filter[0].movie
    }
}


export function detailVideo(id){
    let filter =  info.filter(g=>g.id===id)
    return {
        type:GET_DETAIL,
        payload:filter[0]
    }
}