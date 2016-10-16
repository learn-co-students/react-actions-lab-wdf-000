'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  constructor (props) {
    super();

    // console.log('props', this.props)
  }

  render () {
    return (
        <tr className="row">
          {
            this.props.row.map(
              (cell, i) =>
              <Cell key={ i }
              onChange={ this.props.onChange.bind(null, i) }
              onFocus={ this.props.onFocus.bind(null, i) }
              cell={ cell }
              />)
          }
        </tr>
      )
  }
}

module.exports = Row;
