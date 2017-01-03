'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    return(
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
        {
          this.props.table.map((value,index)=>
        <Row key={index} row={value} onChange={this.props.onChange.bind(null,index)}
          onFocus={this.props.onFocus.bind(null,index)}/>)
        }
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
