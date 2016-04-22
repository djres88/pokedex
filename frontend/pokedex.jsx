var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;
var PokemonIndex = require('./components/pokemon/pokemonIndex.jsx');
var PokemonIndexItem = require('./components/pokemon/pokemonIndexItem.jsx');
var PokemonDetail = require("./components/pokemon/pokemonDetail.jsx");
var ToyDetail = require("./components/toys/toyDetail.jsx");
//Temp for testing
//var clientActions = require("./actions/clientActions");
//var PokemonStore = require("./stores/pokemon");
//clientActions.fetchAllPokemon();

var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <h1>Pokedex</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PokemonIndex}/>
    <Route path="pokemon" component={PokemonIndex}>
      <Route path=":pokemonId" component={PokemonDetail}>
        <Route path="toys/:toyId" component={ToyDetail} />
      </Route>
    </Route>
  </Route>
);


ReactDOM.render((
  <Router history={HashHistory}>
    {routes}
  </Router>
), document.getElementById("root"));
