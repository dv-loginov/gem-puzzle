import { generateNumberSet } from '../../utils/utils';

export class BoardModel {
  constructor(size) {
    this._size = size;
  }

  generateBoard(board) {
    const arrNumber = [...board];
    let counter = 0;
    this._board = Array(this._size);
    for (let i = 0; i < this._size; i++) {
      this._board[i] = Array(this._size);
      for (let j = 0; j < this._size; j++) {
        this._board[i][j] = arrNumber[counter++];
      }
    }
    console.log(this._board);
    return this._board;
  }

  getBoard() {
    return this._board;
  }

}
