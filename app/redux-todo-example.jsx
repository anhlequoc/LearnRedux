var redux = require('redux');

console.log('starting todo redux example');
var stateDefault = {
  showComplete: false,
  searchText: '',
  todos: []
};
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText //override the searchText property
      };
      break;
    default:
      return state;
  }
};

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('currentState: ', currentState);

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: "test search text"
};
store.dispatch(action);

console.log("change searchText", store.getState());
