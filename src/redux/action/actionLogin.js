import axios from "axios"
import { GET, GET_DETAIL, LOGIN } from "../../components/constants/Constants"
import data from '../../components/constants/user.json';

export function log(payload){

    let exist=data.find(f=>f.user===payload.user)
    if(exist){
        if(exist.password===payload.password){
            console.log("ingrese")
            return {
                type:LOGIN,
                payload:true
            }
        }
        else{
            // eslint-disable-next-line no-throw-literal
            throw "Contraseña Equivocada"
        }
    }
    else{
        // eslint-disable-next-line no-throw-literal
        throw "Usuario no Existe"
    }   
}


