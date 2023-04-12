import { selectNode } from '../consts/consts';
import { Cell } from '../Cell';
import { generateNumberSet } from '../../utils/utils';

export class BoardController {
  constructor({model, view}) {
    this._size = selectNode.options[selectNode.selectedIndex].value;
    this._modelClass = model;
    this._viewClass = view;
    this._handleClick = this._handleClick.bind(this);
  }

  init() {
    const initBoard = generateNumberSet(this._size);

    this._model = new this._modelClass(this._size);

    this._view = new this._viewClass(
      this._size,
      {
        instance: Cell,
        handle: this._handleClick
      });

    this._view.generateView(this._model.generateBoard(initBoard));

  }

  _handleClick() {
    console.log('_handeleClick');
  }
}
