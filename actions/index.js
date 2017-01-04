'use strict';

function addColumn (ev) {
  ev.preventDefault()
    this.setState({
      table: this.state.table.map((element, index) =>
      Object.assign([], element, element.concat(""))
    )
  })
}

function addRow (ev) {
  ev.preventDefault()
  this.setState({
    table: [...this.state.table, ["", ""]]
  })

}

function changeCell (rowIndex, columnIndex, ev) {
  var copy = this.state.table.slice()
  copy[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: Object.assign([], this.state.table, copy)
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
  var copy = this.state.table.slice()
  if(this.state.table.length > 1){
    copy.pop()
    this.setState({
      table: copy
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  if(this.state.table[0][1]){
    var copy = this.state.table.slice()
    copy.map((row) => {if(row.length > 1){row.pop()}})

    this.setState({
      table: copy
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
