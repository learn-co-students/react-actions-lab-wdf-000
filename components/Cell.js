'use strict';

const React = require('react');

class Cell extends React.Component {
  constructor() {
    super();
  } 

  render () {
    return (<td className="cell"> 
      <input type="text" onChange={this.props.onChange} value={this.props.cell} onFocus={this.props.onFocus}> </input> 
    </td>
    )
  }
}

module.exports = Cell;
