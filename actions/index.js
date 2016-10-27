'use strict';

function addColumn (ev) {
  ev.preventDefault()
  var newTable = this.state.table.map((row)=> [...row, ''])
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault()
  this.setState({
    table: [...this.state.table, this.state.table[0].map(()=> "")]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  var tableClone = this.state.table.slice()
  tableClone[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: tableClone
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  if (this.state.table.length > 1) {
    var tableClone = this.state.table.slice(0, -1) 
    this.setState({
      table: tableClone
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  if (this.state.table[0].length > 1) {
    var newTable = this.state.table.map((array) => array.slice(0, -1))
    this.setState({
      table: newTable
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
