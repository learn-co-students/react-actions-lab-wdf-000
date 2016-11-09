'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const {table, onChange, onFocus, onBlur} = this.props
    return (
      <table className = "table" onBlur={onBlur}>
        <tbody>
          {
            table.map((row, index) =>
            <Row row={row} key={index} onChange={onChange.bind(null, index)} onFocus={onFocus.bind(null, index)}/>
            )
          }
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
