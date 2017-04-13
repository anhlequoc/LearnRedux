var redux = require('redux');
var thunk = require('redux-thunk').default; //thunk is middleware to have action generators that return functions. Reason is if your action generator is doing something asynchronous and need dispatch action inside of it
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index'); //ES destructoring

export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer, //name state will be managed by the nameReducer
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // (f) => return f;
  ));

  return store;
};
