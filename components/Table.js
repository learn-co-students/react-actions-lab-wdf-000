'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {

  render () {
    var r = this.props.table;
    var row = new Array(r.length);
    for (var i = 0, len = r.length; i < len; i++) {
      row[i] = <Row key={i} row={r[i]} onChange={this.props.onChange.bind(null,i)} onFocus={this.props.onFocus.bind(null,i)} />
    }
    return (<table onBlur={this.props.onBlur} className='table' >
      <tbody>
        {row}
      </tbody>
    </table>);
  }
}

module.exports = Table;
