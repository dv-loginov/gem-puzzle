import { generateNumberSet } from '../../core/utils';
import { sizesBoard } from '../../core/constants';

export class ModelBoard {
  constructor(observer, storage) {
    console.log('ModelBoard: constructor');
    this._observer = observer;
    this._storage = storage;

    this._state = {
      sizeIndex: null,
      sizeBoard: null,
      board: null,
    };

    this._setSizeBoard = this._setSizeBoard.bind(this);
  }

  init() {
    console.log('ModelBoard: init');
    this._setSizeBoard(0);
    this._observer.subscribe('controllerApp:ChangeSizeBoard', this._setSizeBoard);
  }

  _setSizeBoard(sizeIndex, renderBoard) {
    console.log(`ModelBoard: setSizeBoard ${sizeIndex}`);
    this._state.sizeIndex = sizeIndex;
    this._state.sizeBoard = sizesBoard[sizeIndex];
    this._genBoard();
  }

  _genBoard() {
    console.log(`Генерация доски ${this._state.sizeBoard}x${this._state.sizeBoard}`);
    const arrNumber = [...generateNumberSet(this._state.sizeBoard)];
    let counter = 0;

    this._state.board = Array(this._state.sizeBoard);
    for (let i = 0; i < this._state.sizeBoard; i++) {
      this._state.board[i] = Array(this._state.sizeBoard);
      for (let j = 0; j < this._state.sizeBoard; j++) {
        this._state.board[i][j] = arrNumber[counter++];
      }
    }
    this._observer.emit('modelBoard:genBoard', this._state.board);
  }

  move(data) {
    if (this._availableMovies(data.zero).some(({ row, col }) =>
      (row === data.current.row) && (col === data.current.col))) {
      this._state.board[data.zero.row][data.zero.col] = this._state.board[data.current.row][data.current.col];
      this._state.board[data.current.row][data.current.col] = 0;
      console.log(this._state.board);
      this._observer.emit('modelBoard:moveIsAllowed', null);
    } else {
      this._observer.emit('modelBoard:moveIsNotAllowed', null);
    }
  }

  _availableMovies(zeroCoordinates) {
    const { col, row } = zeroCoordinates;

    const possibleMovies = [
      { row: row - 1, col: col },
      { row: row + 1, col: col },
      { row: row, col: col - 1 },
      { row: row, col: col + 1 }
    ];

    return possibleMovies.filter(({ row, col }) => {
      return (
        (row >= 0) && (row < (this._state.sizeBoard)) &&
        (col >= 0) && (col < (this._state.sizeBoard)));
    });
  }
}