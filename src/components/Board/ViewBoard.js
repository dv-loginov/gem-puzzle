import { boardClass, cell } from '../../core/constants';

export class ViewBoard {
  constructor({ instance, handle, observer }) {
    this._cellInstance = instance;
    this._onClick = handle;
    this._observer = observer;
    this._root = document.querySelector(boardClass);
    this._moveGood = this._moveGood.bind(this);
    this._moveBad = this._moveBad.bind(this);
  }

  init() {
    this._observer.subscribe('modelBoard:moveIsAllowed', this._moveGood);
    this._observer.subscribe('modelBoard:moveIsNotAllowed', this._moveBad);
  }

  _moveGood() {
    this._zeroNode = this._root.querySelector('[data-type="zero"]');

    const coordCurrent = this._currentNode.getBoundingClientRect();
    const coordZero = this._zeroNode.getBoundingClientRect();

    if (coordCurrent.y === coordZero.y) {
      if (coordCurrent.x > coordZero.x) {
        this._move('left', coordCurrent.x - coordZero.x);
      }
      else {
        this._move('right', coordZero.x - coordCurrent.x);
      }
    } else {
      if (coordCurrent.y > coordZero.y) {
        this._move('up', coordCurrent.y - coordZero.y);
      }
      else {
        this._move('down', coordZero.y - coordCurrent.y);
      }
    }

    this._observer.emit('viewBoard:addStep');
  }

  _move(direction, delta) {
    const delayMs = 1000;

    this._root.style.pointerEvents = 'none';

    switch (direction) {
      case 'up':
        this._currentNode.style.transform = `translateY(-${delta}px)`;
        break;
      case 'down':
        this._currentNode.style.transform = `translateY(${delta}px)`;
        break;
      case 'left':
        this._currentNode.style.transform = `translateX(-${delta}px)`;
        break;
      case 'right':
        console.log('right');
        this._currentNode.style.transform = `translateX(${delta}px)`;
        break;
      default: return null;
    }

    setTimeout(() => {
      this._currentNode.style.transform = null;
      this._currentNode.closest('.cell').dataset.type = 'zero';
      this._zeroNode.appendChild(this._currentNode);
      delete this._zeroNode.dataset.type;
      this._zero = this._current;
      this._root.style.pointerEvents = 'auto';
    }, delayMs);
  }

  _moveBad() {
    // TODO звук неудачного хода, если звук включен
  }

  clearBoard() {
    this._root.innerHTML = '';
  }

  _handleClick = (event, data) => {
    this._currentNode = event.target;
    this._current = data.current;
    this._onClick(data);
  }

  renderBoard(board) {
    const boardNodes = new DocumentFragment();

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const row = document.createElement('div');
      row.classList.add(cell.rowClass);

      for (let colIndex = 0; colIndex < board.length; colIndex++) {
        const cell = new this._cellInstance(board[rowIndex][colIndex], { col: colIndex, row: rowIndex })
        if (board[rowIndex][colIndex] === 0) this._zero = { col: colIndex, row: rowIndex };
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
      node.addEventListener('click', (event) => {
        this._handleClick(event, {
          zero: this._zero,
          current: {
            col: +node.closest('.cell').dataset.col,
            row: +node.closest('.cell').dataset.row,
          }
        });
      })
    })
  }
}
