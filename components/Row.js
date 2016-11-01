'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  constructor(props) {
    super(props);

  }

 

  render () {
    let cells = this.props.row.map( (cell, i) => {
      return <Cell key={i} cell={cell} onChange={this.props.onChange.bind(null, i)} onFocus={this.props.onFocus.bind(null, i)}/>
    })
    return(
      <tr className="row">
        {cells}
      </tr>
    )
  }
}

module.exports = Row;
