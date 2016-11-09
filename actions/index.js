'use strict';

function addColumn (ev) {
  ev.preventDefault();
  let tableNow = this.state.table;
  let newTable = tableNow.map(function(row, index){
    return [...row,''];
  });
  this.setState({
    table: newTable
  });
}

function addRow (ev) {
  ev.preventDefault();
  let tableNow = this.state.table;
  let row = new Array(tableNow[0].length).fill("");
  let newTable = [...tableNow, row];
  this.setState({
    table: newTable
  });
}

function changeCell (rowIndex, columnIndex, ev) {
  let tbl = this.state.table;
  tbl[rowIndex][columnIndex] = ev.target.value;
  this.setState({
    table: tbl
  });
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  });
}

function blurCell () {
  this.setState({
    focused: null
  });
}

function removeRow (ev) {
  ev.preventDefault();
  let tbl = this.state.table;
  if (tbl.length > 1) {
    tbl.pop();
    this.setState({
      table: tbl
    });
  } else {
    alert("Forbidden action: this table needs to have at least one row!");
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  let tbl = this.state.table;
  if (tbl[0].length > 1){
    let newTable = tbl.map(function(row){
      return row.slice(0, row.length - 1)
    });
    this.setState({
      table: newTable
    });
  } else {
    alert("Forbidden action: this table will collapse without at least one column to support it!");
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
