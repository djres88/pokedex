var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/pokemonConstants.js');
var PokemonStore = new Store(AppDispatcher);

var _pokemon = {};

PokemonStore.resetPokemon = function(pokemon) {
  _pokemon = {};
  for (var i = 0; i < pokemon.length; i++) {
    _pokemon[pokemon[i].id] = pokemon[i];
  }
};

PokemonStore.all = function() {
  var pokemon = [];
  Object.keys(_pokemon).forEach(function(poke) {
    pokemon.push(_pokemon[poke]);
  });
  return pokemon;
};

PokemonStore.find = function(id) {
  var foundPoke = false;
  Object.keys(_pokemon).forEach(function(pokeId) {
    if (pokeId === id) {
      foundPoke = _pokemon[pokeId];
    }
  });
  return foundPoke;
};

PokemonStore.updatePokemon = function(pokemon) {
  //WEIRDDDD
  if (_pokemon[pokemon.id]) {
    _pokemon[pokemon.id] = pokemon;
  }
};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMON_RECEIVED:
      this.resetPokemon(payload.pokemon);
      this.__emitChange();
      break;
    case PokemonConstants.SINGLE_POKEMON_RECEIVED:
      this.updatePokemon(payload.pokemon);
      this.__emitChange();
      break;

  }
};

module.exports = PokemonStore;
