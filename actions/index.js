'use strict';

function addColumn (ev) {
  ev.preventDefault()
  const newTable = this.state.table.map(row => row.concat(['']))
  // const newTable = this.state.table.map(array => { return [...array, ''] })
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault()
  // var newTable = this.state.table.concat([this.state.table[0].map(col => "")])
  var newTable = [...this.state.table, ['','']]

  this.setState({
    table: newTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let changedTable = this.state.table.slice();
  changedTable[rowIndex][columnIndex] = ev.target.value

  this.setState({
    table: changedTable
  })
}

function focusCell (rowIndex, columnIndex) {
  let focused = [rowIndex, columnIndex];

  this.setState({
    focused: focused
  })
}

function blurCell () {
  let focused = null;

  this.setState({
    focused: focused
  })
}

function removeRow (ev) {
  ev.preventDefault();

  let changedTable = this.state.table.slice(0, -1)
  if(changedTable.length > 1){
    this.setState({
      table: changedTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if(this.state.table[0][1]) {
    let changedTable = this.state.table.map(row => row.slice(0, -1));

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
