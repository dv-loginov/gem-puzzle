import { cell } from '../../core/constants';

export class Cell {
  static _template = document.querySelector(cell.template).content;

  constructor(num, { x, y }) {
    this._num = num;
    this._x = x;
    this._y = y;
  }

  createCell() {
    this._element = Cell._template.cloneNode(true);

    this._chip = this._element.querySelector(cell.chip);
    this._chip.textContent = this._num;

    this._chip.closest('.cell').dataset.x = this._x;
    this._chip.closest('.cell').dataset.y = this._y;

    if (this._num === 0) this._chip.remove();

    return this._element;
  }
}
