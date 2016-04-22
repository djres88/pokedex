var Dispatcher = require('flux').Dispatcher;

//Save to a variable s/t there's a single instance of Dispatcher
var AppDispatcher = new Dispatcher();
module.exports = AppDispatcher;
