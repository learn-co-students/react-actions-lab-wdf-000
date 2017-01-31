'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const { row, onChange, onFocus, cell, key } = this.props;
    const tableRow = row.map((cell, columnIndex) => <Cell key={columnIndex} cell={cell} onChange={onChange.bind(null, columnIndex)} onFocus={onFocus.bind(null,columnIndex)} />);
    return(
      <tr className='row'>
        {tableRow}
      </tr>
    )
  }
}

module.exports = Row;
