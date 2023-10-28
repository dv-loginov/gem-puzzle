import { Cell } from '../Cell/Cell';
import { ViewBoard } from './ViewBoard';
import { ModelBoard } from './ModelBoard';

export class ControllerBoard {
  constructor(observer) {
    this._observer = observer;
    this._handleClick = this._handleClick.bind(this);
    this._renderBoard = this._renderBoard.bind(this);
  }

  _init() {
    this._observer.subscribe('modelBoard:genBoard', this._renderBoard);

    this._viewBoard = new ViewBoard({
      instance: Cell,
      handle: this._handleClick,
      observer: this._observer,
    });
    this._viewBoard.init();

    this._modelBoard = new ModelBoard(this._observer, this._storage);
    this._modelBoard.init();
  }

  run() {
    this._init();
  }

  changeSizeBoard(sizeIndex) {
    this._modelBoard._setSizeBoard(sizeIndex);
  }

  _renderBoard(board) {
    this._viewBoard.clearBoard();
    this._viewBoard.renderBoard(board);
  }

  _handleClick(data) {
    this._modelBoard.move(data);
  }
}
