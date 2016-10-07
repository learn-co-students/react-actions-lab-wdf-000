'use strict';

function addColumn (ev) {
  ev.preventDefault();
  this.setState({
    table: this.state.table.map(row => [...row, ''])
  });
}

function addRow (ev) {
  ev.preventDefault();
  var newRow = [];
  for(var i = 0; i < (this.state.table[0]).length; i++) {newRow.push('')}
  this.setState({
    table: [...this.state.table, newRow]
  });
}

function changeCell (rowIndex, columnIndex, ev) {
  var newTab = this.state.table;
  newTab[rowIndex][columnIndex] = ev.target.value;
  this.setState({
    table: newTab
  }); 
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
    this.setState({
      table:  (this.state.table).slice(0, ((this.state.table).length - 1))    
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if (this.state.table[0].length > 1) {
    this.setState({
      table: (this.state.table).map(row => row.slice(0, (row.length - 1)))
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
