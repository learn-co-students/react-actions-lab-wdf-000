'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {



  render () {
    const rows = this.props.table.map((row, index) => <Row row={row} onChange={this.props.onChange.bind(null, index)} key={index} onFocus={this.props.onFocus.bind(null, index)}/>)
    return(
      <table className="table" onBlur={this.props.onBlur} >
      <tbody>
      {rows}
      </tbody>
      </table>
    )
  }
}

module.exports = Table;
