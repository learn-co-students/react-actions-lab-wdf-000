'use strict';

const React = require('react');
const actions = require('../actions');
const Table = require('./Table');

class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      table: [[""]],
      focused: null
    };

    this.handleAddColumn = actions.addColumn.bind(this);
    this.handleAddRow = actions.addRow.bind(this);
    this.handleRemoveColumn = actions.removeColumn.bind(this);
    this.handleRemoveRow = actions.removeRow.bind(this);
    this.handleChange = actions.changeCell.bind(this);
    this.handleFocus = actions.focusCell.bind(this);
    this.handleBlur = actions.blurCell.bind(this);
  }
  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.handleAddColumn.bind(this)}>Add Column</button>
          {' '}
          <button onClick={this.handleAddRow.bind(this)}>Add Row</button>
          {' '}
          <button onClick={this.handleRemoveColumn.bind(this)}>Remove Column</button>
          {' '}
          <button onClick={this.handleRemoveRow.bind(this)}>Remove Row</button>
        </div>

        <Table table={this.state.table} onFocus={this.handleFocus} onChange={this.handleChange} onBlur={this.handleBlur}/>

        <div className='spreadsheet__focused'>
          <p>{this.state.focused ? `${this.state.focused[0]} — ${this.state.focused[1]}` : null}</p>
        </div>
      </div>
    );
  }
}

module.exports = Spreadsheet;
