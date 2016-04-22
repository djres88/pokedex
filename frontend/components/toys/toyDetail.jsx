var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var ClientActions = require('../../actions/clientActions.js');

var ToyDetail = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },

  componentDidMount: function(){
    this.listenerToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function() {
    ClientActions.fetchToys(this.state.pokemon);
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function() {
    // var pokemon = PokemonStore.find(this.props.params.pokemonId);
    // if (pokemon) {
    //   return {toys: pokemon.toys()};
    // } else {
    //   return {toys: []};
    // }
    return {toys: []};
  },

  render: function() {
    return <div></div>;
  }
});

module.exports = ToyDetail;
