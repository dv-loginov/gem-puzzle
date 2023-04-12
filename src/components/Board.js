import { selectNode } from './consts/consts';

export class Board {
  constructor(container, element) {
    this._rootNode = container;
    this._size = selectNode.options[selectNode.selectedIndex].value;
    this._Element = element;
  }

  // renderBoard() {
  //   this._generateBoard();
  //
  //   for (let i = 0; i < this._size; i++) {
  //     for (let j = 0; j < this._size; j++) {
  //       this._rootNode.prepend(this._board[i][j]);
  //     }
  //   }
  // }
  //
  // _generateBoard() {
  //   const arrNumber = [...this._generateNumberSet()];
  //   let counter = 0;
  //   this._board = Array(this._size);
  //   for (let i = 0; i < this._size; i++) {
  //     this._board[i] = Array(this._size);
  //     for (let j = 0; j < this._size; j++) {
  //       const cell = new this._Element(arrNumber[counter++], this._handeleClickChip);
  //       this._board[i][j] = cell.createCell();
  //     }
  //   }
  // }
  //
  // _generateNumberSet() {
  //   const arr = new Set();
  //   while (arr.size < this._size ** 2) {
  //     arr.add(Math.floor(Math.random() * this._size ** 2));
  //   }
  //   return arr;
  // }

  _handeleClickChip(instance) {
    console.log(instance);
  }

}
