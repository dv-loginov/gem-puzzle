import { board, cell } from '../consts';

export class BoardView {
  constructor({instance, handle}) {
    this._cellInstance = instance;
    this._handleClick = handle;
    this._root = document.querySelector(board);
  }

  createView(board) {
    this._size = board.length;
    const boardNodes = new DocumentFragment();

    for (let i = 0; i < board.length; i++) {
      const row = document.createElement('div');
      row.classList.add(cell.rowClass);

      for (let j = 0; j < board.length; j++) {
        const cell = new this._cellInstance(board[i][j], this._handleClick);
        row.append(cell.createCell());
      }

      boardNodes.append(row);
    }

    this._root.append(boardNodes);
    this._fillBoard();
  }

  _fillBoard() {
    this._board = Array(this._size);
    const cells = this._root.querySelectorAll(cell.chip);
    let counter = 0;

    for (let i = 0; i < this._size; i++) {
      this._board[i] = Array(this._size);

      for (let j = 0; j < this._size; j++) {
        this._board[i][j] = cells[counter++];
        if (this._board[i][j].textContent === '0') {
          this._zeroCell = this._board[i][j].closest('.cell');
          this._board[i][j].remove();
        }
      }
    }

    console.log(this._zeroCell);
  }
}
