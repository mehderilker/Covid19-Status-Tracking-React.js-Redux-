
import {GET_CORONA_ALL_SUCCESS, GET_CORONA_COUNTRY_SUCCESS} from "../actions/mainAction";

const INITIAL_STATE = {
    coronaAll: [],
    coronaCountry: []
};

export default(state =  INITIAL_STATE,action) =>{
    switch (action.type) {
        case GET_CORONA_ALL_SUCCESS:
            return {...state,coronaAll: action.payload};
        case GET_CORONA_COUNTRY_SUCCESS:
            return {...state,coronaCountry: action.payload}
        default:
            return state;
    }
}