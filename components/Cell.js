'use strict';

const React = require('react');

class Cell extends React.Component {
  render () {
    return(
      <td className='cell'>
        <input onFocus={this.props.onFocus} onChange={this.props.onChange} value={this.props.cell}></input>
      </td>
    )
  }
}

module.exports = Cell;
