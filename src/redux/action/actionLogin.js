import { LOGIN } from "../../components/constants/Constants"
import data from '../../components/constants/user.json';

export function userLogin(payload){

    let exist=data.find(f=>f.user===payload.user)
    if(exist){
        if(exist.password===payload.password){
            return {
                type:LOGIN,
                payload:true
            }
        }
        else{
            // eslint-disable-next-line no-throw-literal
            throw "Datos Incorrectos"
        }
    }
    else{
        // eslint-disable-next-line no-throw-literal
        throw "Usuario no Existe"
    }   
}



