'use strict';

const React = require('react');

class Cell extends React.Component {
  render () {
  	return (
  		<td className='cell'>
  			<input onChange={this.props.onChange} onFocus={this.props.onFocus} value={this.props.cell}/>
  		</td>
  	);
  }
}

module.exports = Cell;