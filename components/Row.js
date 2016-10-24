'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const r = this.props.row;
    var row = new Array(r.length);
    for (var i = 0, len = r.length; i < len; i++) {
      row[i] = <Cell cell={r[i]} key={i} onChange={this.props.onChange.bind(null,i)} onFocus={this.props.onFocus.bind(null,i)} />
    }
    return (
      <tr className="row">{row}</tr>
    );
  }
}

module.exports = Row;
