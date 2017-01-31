'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const newTable = this.state.table.map(row => [...row, '']);

  this.setState({
    table: newTable,
  })
}

function addRow (ev) {
  ev.preventDefault();
  const newRow = ['',''];

  this.setState({
    table: [...this.state.table, newRow],
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const selectedRow = [...this.state.table[rowIndex]];
  selectedRow.splice(columnIndex, 1, ev.target.value);

  const updatedTable = [...this.state.table.slice()];
  updatedTable.splice(rowIndex, 1, selectedRow);

  this.setState({
    table: updatedTable,
  })

}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex],
  })
}

function blurCell () {
  this.setState({
    focused: null,
  })
}

function removeRow (ev) {
  ev.preventDefault();
  if(this.state.table.length > 1){
    const updatedTable = this.state.table.slice(0, -1);

    this.setState({
      table: updatedTable,
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if(this.state.table[0].length > 1){
    const updatedTable = this.state.table.map( (el) => el.slice(0, -1) );

    this.setState({
      table: updatedTable,
    })
  }
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
