var redux = require('redux');
var axios = require('axios');

console.log('starting redux example');

//store need to be a pure function - called as the reducer
// for todo app, this store will represent for the search task, complete checkbox and todo array
//for most of our applications, we will use 1 store which means we have 1 object that represents your entire application
//createStore() takes one argument which is a pure function - this pure function in redux is called as reducer
// reducer takes existing state and the action as arguments and compute the new state - for todo app, I triggered an action to change the search text, I would modify the stae with the action and I would return the new state

/* remove total state này sau khi chia các state con thành các reducer
var stateDefault = {
  name: "Anonymous",
  hobbies: [],
  movies: []
}
*/

var oldReducer = (state = stateDefault, action) => {
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
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter(function (hobby) {
          return hobby.id !== action.id; //true will keep hobby, false will remove
        })
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        //cach viet khac dung arrow function
        movies: state.movies.filter( (movie) => movie.id !== action.id)
      }
    default:
      return state;
  }
};

// Name reducer and action generators
// ------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

//An action generator is a simple function that takes the items required to generate the object with the type set on it - see below
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name //ES6: có thể viết là name khi truyền vào là name rồi: {type: 'CHANGE_NAME', name}
  };
};

// Hobby reducer and action generators
// ------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter(function (hobby) {
        return hobby.id !== action.id;
      })
    default:
      return state;
  }
}

//action generator for ADD_HOBBY
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  }
};

//action generator for REMOVE_HOBBY
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  }
};

// Movie reducer and action generators
// ------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter(function (movie) {
        return movie.id !== action.id;
      })
    default:
      return state;
  }
}

//action generator for ADD MOVIE
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title: title,
    genre: genre
  }
};

//action generator for REMOVE MOVIE
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id: id
  }
};


// Map reducer and action generators
// ------------
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
 switch (action.type) {
   case 'START_LOCATION_FETCH':
    return {
      isFetching: true,
      url: undefined
    }
  case 'COMPLETE_LOCATION_FETCH':
    return {
      isFetching: false,
      url: action.url
    }
  default:
    return state
 }
};

//action generators
var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url: url
  }
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function(res) {
    var loc = res.data.loc;
    var baseURL = 'http://maps.google.com?q=';

    store.dispatch(completeLocationFetch(baseURL + loc));
  });
};

var reducer = redux.combineReducers({
  name: nameReducer, //name state will be managed by the nameReducer
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f // (f) => return f;
));

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

fetchLocation();

var action = {
  type: 'CHANGE_NAME', //common rule for type of action
  name: 'Anh'
};
store.dispatch(action); //dispatch action to store

store.dispatch({
  type:'ADD_HOBBY',
  hobby: 'running'
})

store.dispatch({
  type:'ADD_HOBBY',
  hobby: 'playing'
})

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})

// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Le le'
// });
// dùng action generator như dưới

store.dispatch(changeName('Le Le'));
store.dispatch(changeName('Anh Le Le'));
store.dispatch(addHobby('walking'));
store.dispatch(removeHobby(3));
store.dispatch(addMovie('heroes', 'action'));
store.dispatch(removeMovie(3));

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'movie 1',
  genre: 'drama'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'movie 2',
  genre: 'anime'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})
