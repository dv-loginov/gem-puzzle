import { Cell } from '../Cell/Cell';
import { ViewBoard } from './ViewBoard';
import { ModelBoard } from './ModelBoard';

export class ControllerBoard {
  constructor(observer, storage) {
    console.log('ControllerBoard: constructor');
    this._observer = observer;
    this._storage = storage;
    this._handleClick = this._handleClick.bind(this);
    this._renderBoard = this._renderBoard.bind(this);
  }

  _init() {
    console.log('ControllerBoard: init');

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
    console.log('ControllerBoard: run');
    this._init();
  }


  changeSizeBoard(sizeIndex) {
    console.log('ControllerBoard: changeSizaBoard');
    this._modelBoard._setSizeBoard(sizeIndex);
  }

  _renderBoard(board) {
    console.log('ControllerBoard: renderBoard');
    this._viewBoard.clearBoard();
    this._viewBoard.renderBoard(board);
  }

  _handleClick(data) {
    console.log('controllerBoard: click');
    console.log(data);
    this._modelBoard.move(data);
  }
}
