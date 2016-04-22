var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var clientActions = require('../../actions/clientActions.js');
var PokemonIndexItem = require('./pokemonIndexItem.jsx');

var PokemonIndex = React.createClass({
  getInitialState: function () {
    return {pokemon: []};
  },

//Remember the componentDidMount/_onChange pattern! The component mounts, adds a listener, and from that point forward any changes register the set change.
  componentDidMount: function() {
    this.listenerToken = PokemonStore.addListener(this._onChange);
    clientActions.fetchAllPokemon();
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  _onChange: function() {
    this.setState({pokemon: PokemonStore.all()});
  },

  render: function() {
    var allPokemon = this.state.pokemon.map(function(poke){
      return <PokemonIndexItem key={poke.id} pokemon={poke}/>;
    });

    return (
      <div>
        <div className="pokemon-index-pane">
          <ul> {allPokemon} </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = PokemonIndex;
