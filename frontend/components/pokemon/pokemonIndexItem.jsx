var React = require('react');
var HashHistory = require('react-router').hashHistory;

var PokemonIndexItem = React.createClass({
  showDetail: function() {
    //Gets prop passed down from index
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    return (
      <div>
        <li className="poke-list-item" onClick={this.showDetail}>
          {this.props.pokemon.name + " | " + this.props.pokemon.poke_type}
        </li>
      </div>
    );
  }
});

module.exports = PokemonIndexItem;
