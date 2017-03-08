'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const updated = this.state.table.map(row => [...row, ''])
  this.setState({
    table: updated
  })
}

function addRow (ev) {
  ev.preventDefault();
  this.setState({
    table: [...this.state.table, ['', '']]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const newOne = this.state.table[rowIndex]
  newOne.splice(columnIndex, 1, ev.target.value)


  const newTable = [...this.state.table.slice()]
  newTable.splice(rowIndex, 1, newOne)

  this.setState({
    table: newTable
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
  ev.preventDefault();
  if (this.state.table.length > 1) {
    const newTable = this.state.table.slice(0, -1)
    this.setState({
      table: newTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if (this.state.table[0].length > 1) {
    const newTable = this.state.table.map(row => row.slice(0, -1))
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
