'use strict';

function addColumn (ev) {
  ev.preventDefault();

  let changedTable =
    this.state.table.map( row => row.concat(['']));

  this.setState({
    table: changedTable
  });
}

function addRow (ev) {
  ev.preventDefault();

  let changedTable =
    this.state.table.concat([
      this.state.table[0].map( col => "")
      ]);

  this.setState({
    table: changedTable
  });
}

function changeCell (rowIndex, columnIndex, ev) {
  let changedTable =
    this.state.table.slice();
  changedTable[rowIndex][columnIndex] = ev.target.value

  this.setState({
    table: changedTable
  });
}

function focusCell (rowIndex, columnIndex) {
  let focused = [rowIndex, columnIndex];

  this.setState({
    focused: focused
  });
}

function blurCell () {
  let focused = null;

  this.setState({
    focused: focused
  });
}

function removeRow (ev) {
  ev.preventDefault();

  let changedTable =
    this.state.table.slice(0, -1);

  if (changedTable.length > 1) {
    this.setState({
    table: changedTable
    });
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  // if a row has more than one elem
  if (this.state.table[0][1]) {
    let changedTable =
      this.state.table.map( row => row.slice(0, -1));

    this.setState({
      table: changedTable
    });
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
