'use strict';

function addColumn (ev) {
   ev.preventDefault();
   this.setState({
     table: this.state.table.map((row, index) => {
       return [...row, ''];
     })
   });
 }

 function addRow (ev) {
   ev.preventDefault();
   const currentTable = this.state.table;
   this.setState({
     table: [...currentTable, Array(currentTable[0].length).fill('')]
   });
 }

 function changeCell (rowIndex, columnIndex, ev) {
   const changedCell = ev.target.value;
   let changingTable = this.state.table;
   changingTable[rowIndex][columnIndex] = changedCell;

   this.setState({
     table: changingTable
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
   const currentTable = this.state.table;
   if(currentTable.length > 1){
     this.setState({
       table: currentTable.splice(0, currentTable.length-1)
     });
   }
 }

 function removeColumn (ev) {
   ev.preventDefault();
   if(this.state.table[0].length > 1){
     this.setState({
       table: this.state.table.map((row, index) => {
         return row.splice(0, row.length-1);
       })
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
