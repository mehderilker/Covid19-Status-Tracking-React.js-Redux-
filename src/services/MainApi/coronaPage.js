import api from '../api'

const getCoronaAll =(callBack) => {
    api.get('/all', {

    }).then(function (response) {
            callBack(response.data,null)
    }).catch(function (error) {
            callBack(null,error)
    })
};

const getCoronaCountry = (callBack) => {
    api.get('/countries', {

    }).then(function (response) {
        callBack(response.data,null)
    }).catch(function (error) {
        callBack(null,error)
    })
}

export {getCoronaAll,getCoronaCountry}