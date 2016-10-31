'use strict';

const React = require('react');
const actions = require('../actions');
const Table = require('./Table');

class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      table: [['']],
      focused: null
    };
    this.handleAddColumn = actions.addColumn.bind(this);
    this.handleAddRow = actions.addRow.bind(this);
    this.handleChangeCell = actions.changeCell.bind(this);
    this.handleFocusCell = actions.focusCell.bind(this);
    this.handleBlurCell = actions.blurCell.bind(this);
    this.handleRemoveRow = actions.removeRow.bind(this);
    this.handleRemoveColumn = actions.removeColumn.bind(this);
  }

  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.handleAddColumn}>Add Column</button>
          {' '}
          <button onClick={this.handleAddRow}>Add Row</button>
          {' '}
          <button onClick={this.handleRemoveColumn}>Remove Column</button>
          {' '}
          <button onClick={this.handleRemoveRow}>Remove Row</button>
        </div>

        <Table 
        table = {this.state.table}
        onChange = {this.handleChangeCell}
        onFocus = {this.handleFocusCell}
        onBlur = {this.handleBlurCell}
        />

        <div className='spreadsheet__focused'>
          {this.state.focused ? <strong>{this.state.focused[0]} — {this.state.focused[1]}</strong> : null}
        </div>
      </div>
    );
  }
}

module.exports = Spreadsheet;