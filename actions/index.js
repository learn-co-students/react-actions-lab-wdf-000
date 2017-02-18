'use strict';

function addColumn (ev) {
  ev.preventDefault();

  const tableWithNewColumn = this.state.table.map(row => [...row, '']);
  this.setState({
    table: tableWithNewColumn
  })

}

function addRow (ev) {
  ev.preventDefault();

  this.setState({
    table: [...this.state.table, this.state.table[0].map(() => '')]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const updatedRow = this.state.table[rowIndex].slice()
  updatedRow.splice(columnIndex, 1, ev.target.value)

  const updatedTable = this.state.table.slice()
  updatedTable.splice(rowIndex, 1, updatedRow)

  this.setState({
    table: updatedTable
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
  
  if (this.state.table.length > 1){
    const tableWithRemovedRow = this.state.table.slice(0,-1);
  

    this.setState({
      table: tableWithRemovedRow
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();

  if (this.state.table[0].length > 1){
    const tableWithRemovedColumn = this.state.table.map(row => row.slice(0,-1));

    this.setState({
      table: tableWithRemovedColumn 
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
