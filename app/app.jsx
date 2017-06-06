var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css'); - remove this line after adding 'sassLoader' obj in webpack.config
$(document).foundation();
//load app/styles/app.css
require('style!css!sass!applicationStyles');{/*load alias applicationStyles in webpack.config by using style loader, css loader and sass loaders*/}
// ReactDOM.render(
// 	<p>React BoilerPlate 3</p>,
// 	document.getElementById('app')
// );

// require("./redux-example.jsx");
//require("./redux-example-2.jsx");
// require('./redux-todo-example.jsx');
require("./pure-function");
