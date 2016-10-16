'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  constructor(props) {
    super();

    this.blu
  }

  render () {
    return (
      <table className="table" onBlur={ this.blurCell }>
        <tbody>
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
