import {combineReducers, createStore,applyMiddleware,compose} from 'redux';
//import thunk from 'redux-thunk';


Object.keys(initialState).forEach(item=>{
    if(typeof reducers[item]==='undefined') {
        reducers[item]= (statePart= null)=>statePart;
    }
});


//const combinedReducers = combineReducers(reducers);

const store = createStore(
    //combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;