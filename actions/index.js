'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const table = this.state.table.map(array => { return [...array, '']})
  this.setState({
    table: table
  })
}

function addRow (ev) {
  ev.preventDefault();
  const table = [...this.state.table, ['', '']]
  this.setState({
    table: table
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  //slice will make a copy so state is not directly changed
  const table = this.state.table.slice()
  var row = table[rowIndex]
  const updated = row.splice(columnIndex,1, ev.target.value)
   this.state.table.splice(rowIndex,1,row)
  this.setState({
    table: table
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
  const table = this.state.table.slice()
  if(this.state.table.length > 1){
        table.pop()

        this.setState({
          table: table
        })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  const table = this.state.table.slice()
  if (this.state.table[0].length > 1) {
    table.map(row => {row.pop()});
    this.setState({
      table: table
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
