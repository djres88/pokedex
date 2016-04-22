var ApiUtil = require('../util/apiUtil');

module.exports = {
  fetchAllPokemon: function () {
    ApiUtil.fetchAllPokemon();
  },

  fetchSinglePokemon: function (id) {
    ApiUtil.fetchSinglePokemon(id);
  }
};
