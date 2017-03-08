'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    return(
      <tr className="row">
        {this.props.row.map(item => <Cell cell={item} onChange={} onFocus={}/>)}
      </tr>
    )
  }
}

module.exports = Row;
