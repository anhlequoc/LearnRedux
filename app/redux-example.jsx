var redux = require('redux');

console.log('starting redux example');

//store need to be a pure function - called as the reducer
// for todo app, this store will represent for the search task, complete checkbox and todo array
//for most of our applications, we will use 1 store which means we have 1 object that represents your entire application
//createStore() takes one argument which is a pure function - this pure function in redux is called as reducer
// reducer takes existing state and the action as arguments and compute the new state - for todo app, I triggered an action to change the search text, I would modify the stae with the action and I would return the new state

var reducer = (state = {name: 'Anonymous'}, action) => {
  //state = state || {name: "Anonymous");

  //reducer satisfied 2 condions:
  // 1. reducer has default state, is just getting started
  // 2. reducer return a state even if there is no action or an action doesn't recognize

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f // (f) => return f;
));

// Subcribe to changes - using callback
var unsubscribe = store.subscribe(() => { // khi khai bảo unsubscribe, chỉ cần gọi function này ở dưới, các dispatch sau đó sẽ không được update vào state
  var state = store.getState();

  console.log('currentState is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
//unsubscribe();

var currentState = store.getState(); //getState() returns our object, in this case it return an object with the name property is "Anonymous"
console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME', //common rule for type of action
  name: 'Anh'
};
store.dispatch(action); //dispatch action to store

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Le le'
});
