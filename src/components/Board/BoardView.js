export class BoardView {
  constructor(size, { instance, handle }) {
    this._size = size;
    this._cellInstance = instance;
    this._handleClick =  handle;
  }

  generateView(board) {
    console.log(board);
  }
}
