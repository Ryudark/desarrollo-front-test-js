import { GENRES, GENRES_FILTER, GET_DETAIL, LOGIN } from '../../components/constants/Constants'

const INITIAL_STATE={
    user:false,
    genres:[],
    genresFilter:[],
    detail:{}
}


function reducer(state=INITIAL_STATE, action) {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user:action.payload
            }
        case GENRES:
            return {
                ...state,
                genres:action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail:action.payload
            }
        case GENRES_FILTER:
            return{
                ...state,
                genresFilter:action.payload
            }
        default: return state
    }
}

export default reducer