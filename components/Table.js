'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const { table, onFocus, onBlur, onChange} = this.props;
    const row = table.map((el, index) => <Row key={index} row={table[index]} onFocus={onFocus.bind(null, index)} onChange={onChange.bind(null, index)} />)
    return(
      <table className="table" onBlur={onBlur}>
        <tbody>
          { row }
        </tbody>
      </table>
    );
  }
}

module.exports = Table;
