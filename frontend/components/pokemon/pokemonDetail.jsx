var React = require("react");
var PokemonStore = require("../../stores/pokemon.js");
var ClientActions = require("../../actions/clientActions.js");
var ToysIndex = require("../toys/toysIndex.jsx");

var PokemonDetail = React.createClass({
  getInitialState: function() {
    //Since this.getStateFromStore returns an object, you can just return the result of the function.
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    //must convert id toInt; props are sent by json, are therefore strings
    var pokemon = PokemonStore.find(this.props.params.pokemonId);
    return {pokemon: pokemon};
  },

  componentDidMount: function() {
    PokemonStore.addListener(this._onChange);
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function() {
    //Since this.getStateFromStore returns an object, you can just return the result of the function.
    ClientActions.fetchSinglePokemon(this.props.params.pokemonId);
  },

  render: function() {
    // console.log(this.state.pokemon);
    var detail;
    if (this.state.pokemon) {
      detail = (
        <div>
          <div className="detail">
            <p>{this.state.pokemon.name}</p>
            <p>{this.state.pokemon.attack}</p>
            <p>{this.state.pokemon.defense}</p>
            <p>{this.state.pokemon.poke_type}</p>
            <p>{this.state.pokemon.moves}</p>
            <img src={this.state.pokemon.image_url}/>
          </div>
          <ToysIndex toys={this.state.pokemon.toys}/>
        </div>
      );
    } else {
      detail = <div className="detail"></div>;
    }
    return (
      <div>
        {this.props.children}
        <div className="pokemon-detail-pane">
          {detail}
        </div>
      </div>
    );
  }

});

module.exports = PokemonDetail;
