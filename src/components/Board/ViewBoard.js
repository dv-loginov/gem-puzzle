import { board, cell } from '../../core/constants';

export class ViewBoard {
  constructor({instance, handle}) {
    console.log('ViewBoard: constructor');
    this._cellInstance = instance;
    this._handleClick = handle;
    this._root = document.querySelector(board);
  }

  init(){
    this._root.innerHTML='';
  }

  renderBoard(board) {
    const boardNodes = new DocumentFragment();

    for (let i = 0; i < board.length; i++) {
      const row = document.createElement('div');
      row.classList.add(cell.rowClass);

      for (let j = 0; j < board.length; j++) {
        const cell = new this._cellInstance(board[i][j], {x: i, y: j})
        if (board[i][j] === 0) this._zero = {x: i, y: j};
        row.append(cell.createCell());
      }
      boardNodes.append(row);
    }

    this._root.append(boardNodes);
    this._setEventListeners();
  }

  _setEventListeners() {
    const cells = this._root.querySelectorAll(cell.chip);

    cells.forEach((node) => {
      node.addEventListener('click', () => {
        this._handleClick({
          zero: this._zero, current: {
            x: +node.closest('.cell').dataset.x,
            y: +node.closest('.cell').dataset.y,
          }
        });
      })
    })
  }

}
