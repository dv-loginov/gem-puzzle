import { cell } from '../consts';

export class Cell {
  static _template = document.querySelector(cell.template).content;

  constructor(num, handleClick) {
    this._handleClick = handleClick;
    this._num = num;
  }

  createCell() {
    this._element = Cell._template.cloneNode(true);
    this._chip = this._element.querySelector(cell.chip);
    this._chip.textContent = this._num;
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._chip.addEventListener('click', () => this._handleClick(this));
  }
}
