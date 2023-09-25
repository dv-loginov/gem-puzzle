import { Cell } from '../Cell/Cell';
import { ViewBoard } from './ViewBoard';
import { ModelBoard } from './ModelBoard';

export class ControllerBoard {
  constructor(observer, storage) {
    console.log('ControllerBoard: constructor');
    this._observer = observer;
    this._storage = storage;

    // this._modelClass = model;
    // this._viewClass = view;
    // this._handleClick = this._handleClick.bind(this);
    this._renderBoard = this._renderBoard.bind(this);
  }

  _init() {
    console.log('ControllerBoard: init');
    
    this._observer.subscribe('modelBoard:genBoard', this._renderBoard);
    
    this._viewBoard = new ViewBoard({
      instance: Cell,
      handle: this._handleClick
    });
    console.log(this._viewBoard);
    
    this._modelBoard = new ModelBoard(this._observer, this._storage);
    this._modelBoard.init();
    
    // this._view.renderView(this._model.createBoard());
    // this._observer.emit('modelBoard:setSizeBoard', this._state.sizeIndex);
  }

  run() {
    console.log('ControllerBoard: run');
    this._init();
  }
  _handleClick(data) {
    console.log(data);
  }


  changeSizeBoard(sizeIndex) {
    console.log('ControllerBoard: changeSizaBoard');
    this._modelBoard._setSizeBoard(sizeIndex);
  }

  _renderBoard(board) {
    console.log('ControllerBoard: renderBoard');
    console.log(board);
    console.log(this._viewBoard);
    this._viewBoard.init();
    this._viewBoard.renderBoard(board);
  }
}

// this._viewBoard = new ViewBoard();
// this._modelBoard = new ModelBoard();
// this._board = new ControllerBoard(this._modelBoard, this._viewBoard);