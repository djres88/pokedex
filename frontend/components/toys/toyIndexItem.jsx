var React = require('react');
var HashHistory = require('react-router').hashHistory;

var ToysIndexItem = React.createClass({
  showDetail: function() {
    HashHistory.push("/pokemon/" + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id);
  },

  render: function() {
    //this.props.toy stuff passed down as props
    return (
      <li className="toy-list-item" onClick={this.showDetail}>
        <p>{this.props.toy.name}</p>
        <p>{this.props.toy.happiness}</p>
        <p>{this.props.toy.price}</p>
        <button value="FIGHT"></button>
      </li>
    );
  }
});

module.exports = ToysIndexItem;
