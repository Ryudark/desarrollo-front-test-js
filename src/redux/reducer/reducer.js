import { GENRES, GENRES_FILTER, GET, GET_DETAIL, LOGIN } from '../../components/constants/Constants'

const INITIAL_STATE={
    user:false,
    genres:[],
    genresFilter:[],
    detail:{}
}


function reducer(state, action) {
    switch(action.type){
        case LOGIN:
            return {
                ...INITIAL_STATE,
                user:action.payload
            }
        case GENRES:
            return {
                ...INITIAL_STATE,
                genres:action.payload
            }
        case GET_DETAIL:
            return{
                ...INITIAL_STATE,
                detail:action.payload
            }
        case GENRES_FILTER:
            return{
                ...INITIAL_STATE,
                genresFilter:action.payload
            }
        default: return state
    }
}

export default reducer