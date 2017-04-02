var redux = require('redux');

console.log('starting todo redux example');
var stateDefault = {
  showComplete: false,
  searchText: '',
  todos: []
};
var reducer = (state = stateDefault, action) => {
  return state;
};

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('currentState: ', currentState);
