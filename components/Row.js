'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const { row, onFocus, onChange } = this.props
    return (
      <tr className = "row">
        {
          row.map((item, index) =>
            <Cell cell={item} key={index} onFocus={onFocus.bind(null, index)} onChange={onChange.bind(null, index)}/>
          )
        }
      </tr>
    )
  }
}

module.exports = Row;
