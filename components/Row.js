'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {

    const rows = this.props.row.map((r, index) => <Cell onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)} cell={r} key={index}/>)
    
    return(
    <tr className="row">
    {rows}
    </tr>
    )
  }
}

module.exports = Row;
