'use strict';

function addColumn (ev) {
  ev.preventDefault();
}

function addRow (ev) {
  ev.preventDefault();
}

function changeCell (rowIndex, columnIndex, ev) {
  
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
}

function removeColumn (ev) {
  ev.preventDefault();
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
