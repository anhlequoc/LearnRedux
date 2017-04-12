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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to state's changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("current state is: ", state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState: ', currentState);

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: "test search text"
};
store.dispatch(action);
store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "search text 2"
});
store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "search text 3"
})
