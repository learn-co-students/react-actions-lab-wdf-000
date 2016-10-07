'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    return (
      <tr className='row'>{(this.props.row).map((cell, i) => 
        <Cell 
          cell={cell} 
          key={i} 
          onChange={this.props.onChange.bind(null, i)} 
          onFocus={this.props.onFocus.bind(null, i)}
        />
      )}</tr>

    )
  }
}

module.exports = Row;
