import { GENRES, GENRES_FILTER, GET_DETAIL } from "../../components/constants/Constants";
import data from '../../components/constants/videos.json';

export function genres(){
    return{
        type:GENRES,
        payload:data
    }
}

export function genresFilter(genre){
    console.log(genre)
    let filter =  data.filter(g=>g.name===genre)
    console.log(filter[0].movie)
    return {
        type:GENRES_FILTER,
        payload:filter[0].movie
    }
}


export function detailVideo(payload){
    return {
        type:GET_DETAIL,
        payload:payload
    }
}