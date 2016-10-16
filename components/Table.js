'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          {(this.props.table).map((arr, i) => <Row 
            row={arr} 
            key={i} 
            onChange={this.props.onChange.bind(null, i)} 
            onFocus={this.props.onFocus.bind(null, i)}/>)}
      </tbody>
      </table>
    )
  }
}

module.exports = Table;
