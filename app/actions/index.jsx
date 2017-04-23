var axios = require('axios');

/*
  //Với ES6: viết export ở đầu này giúp viết ngắn cái export module
  modules.export = {
    changeName: changeName
  }
*/

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  };
};

export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title: title,
    genre: genre
  };
};

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id: id
  };
};

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url: url
  };
};

//action lúc này là 1 function (cac action tren la object) nên cần sử dụng middleware là thunk để xử lý
export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function(res) {
      var loc = res.data.loc;
      var baseURL = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseURL + loc));
    });
  };
};
