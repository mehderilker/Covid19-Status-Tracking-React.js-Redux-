import store from "../stores/store";
import {getCoronaAll,getCoronaCountry} from '../services/MainApi/coronaPage'
export const GET_CORONA_ALL_SUCCESS = "get_corona_all_success";
export const GET_CORONA_COUNTRY_SUCCESS = "get_corona_country_success";

//Actions
export const getCoronaAllAction = () => {
    return()=> {
        getCoronaAll(callbackCoronaAll)
    }
}

export const getCoronaCountryAction = () => {
    return()=> {
        getCoronaCountry(callbackCoronaCountry)
    }
}

//Response
const getCoronaAllSuccess = (response,dispatch) => {
    dispatch({
            type: GET_CORONA_ALL_SUCCESS,
             payload:response
        })
};

const getCoronaCountrySuccess = (response,dispatch) => {
    dispatch({
        type: GET_CORONA_COUNTRY_SUCCESS,
        payload:response
    })
};

//CallbackApi
const callbackCoronaAll = (response,error) => {
    if (response != null){
        getCoronaAllSuccess(response,store.dispatch)
    }
};

const callbackCoronaCountry = (response,error) => {
    if (response != null){
        getCoronaCountrySuccess(response,store.dispatch)
    }
};
