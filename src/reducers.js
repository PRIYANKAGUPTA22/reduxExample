import { combineReducers } from 'redux';

const INITIAL_STATE = {
    results: [],
    status :false,
}
function login(state={},action){
    switch (action.type){
        case 'LOGIN': 
            return  Object.assign({},state,{
                status: action.data
            });
        break;
       
        default:
        return state;
    }
}
function updateResults(state=[],action){
    switch (action.type){
        case 'FETCH_PLANETS_RECEIVED':
           return  action.data.results;
        break;
        default:
        return state;
    }
}
function planetsRequested(state=false,action){
    switch (action.type){
        case 'FETCH_PLANETS_RECEIVED':
           return false;
        break;
        case 'FETCH_PLANETS_REQUESTED':
            return action.data;
        default:
        return state;
    }
}

const rootReducer = combineReducers({
    status:login,
    results:updateResults,
    isFetching:planetsRequested
});

export default rootReducer;