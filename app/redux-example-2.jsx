var redux = require('redux');
var axios = require('axios');

console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subcribe to changes - using callback
var unsubscribe = store.subscribe(() => { // khi khai bảo unsubscribe, chỉ cần gọi function này ở dưới, các dispatch sau đó sẽ không được update vào state
  var state = store.getState();
  console.log("new state is", store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});
//unsubscribe();

var currentState = store.getState(); //getState() returns our object, in this case it return an object with the name property is "Anonymous"
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Le Le'));
store.dispatch(actions.changeName('Anh Le Le'));
store.dispatch(actions.addHobby('walking'));
store.dispatch(actions.removeHobby(3));
store.dispatch(actions.addMovie('heroes', 'action'));
store.dispatch(actions.addMovie('hello', 'drama'));
store.dispatch(actions.removeMovie(3));
