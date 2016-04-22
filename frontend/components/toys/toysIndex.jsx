var React = require('react');
var ToyIndexItem = require('./toyIndexItem.jsx');

var ToysIndex = React.createClass({
  render: function() {
    var toys;
    if (this.props.toys) {
      toys = this.props.toys.map(function(toy) {
        return <ToyIndexItem key={toy.id} toy={toy} />;
      });
    }

    //Don't need an explicit toysIndexItem in routes; relay it here
    return (
      <ul>
        {toys}
      </ul>
    );
  }
});

module.exports = ToysIndex;
