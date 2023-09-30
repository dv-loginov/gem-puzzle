import { cell } from '../../core/constants';

export class Cell {
  static _template = document.querySelector(cell.template).content;

  constructor(num, { col, row }) {
    this._num = num;
    this._col = col;
    this._row = row;
  }

  createCell() {
    this._element = Cell._template.cloneNode(true);

    this._chip = this._element.querySelector(cell.chip);
    this._chip.textContent = this._num;

    this._chip.closest('.cell').dataset.row = this._row;
    this._chip.closest('.cell').dataset.col = this._col;

    if (this._num === 0) {
      this._chip.closest('.cell').dataset.type = 'zero';
      this._chip.remove();
    }
    return this._element;
  }
}
