'use strict';

function addColumn (ev) {
  ev.preventDefault();
  var tab = this.state.table;
  for (var i = 0, len = tab.length; i < len; i++) {
    tab[i].push('');
  }
  this.setState({
    table:tab, 
  });
}

function addRow (ev) {
  ev.preventDefault();
  var tab = this.state.table;
  var arr = [];
  for (var i = 0, len = tab[0].length; i < len; i++) {
    arr.push('');
  }
  tab.push(arr);
  this.setState({table:tab});
}

function changeCell (rowIndex, columnIndex, ev) {
  var tab = this.state.table;
  tab[rowIndex][columnIndex] = ev.target.value;
  this.setState({
    table: tab,
  });
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex,columnIndex],
  });
}

function blurCell () {
  this.setState({
    focused: null,
  });
}

function removeRow (ev) {
  ev.preventDefault();
  var tab = this.state.table;
  if (tab.length > 1) {
    tab.pop();
    this.setState({
      table: tab,
    });
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  var tab = this.state.table;
  if (tab[0].length > 1 ) {
    for (var i = 0, len = tab.length; i < len; i++) {
      tab[i].pop();
    }
    this.setState({
      table:tab, 
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
