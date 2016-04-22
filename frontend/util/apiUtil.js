var ServerActions = require("../actions/ServerActions.js");

module.exports = {
  fetchAllPokemon: function() {
    $.ajax({
      method: 'GET',
      url: 'api/pokemon',
      dataType: 'json',
      success: function(pokemon) {
        ServerActions.receiveAllPokemon(pokemon);
      }
    });
  },

  fetchSinglePokemon: function(id) {
    $.ajax({
      method: 'GET',
      url: 'api/pokemon/' + id,
      dataType: 'json',
      success: function(singlePokemon) {
        ServerActions.receiveSinglePokemon(singlePokemon);
      }
    });
  }
};
