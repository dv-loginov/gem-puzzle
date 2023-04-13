import { selectNode } from '../consts';
import { Cell } from '../Cell/Cell';
import { generateNumberSet } from '../utils/utils';

export class BoardController {
  constructor({model, view}) {
    this._size = selectNode.options[selectNode.selectedIndex].value;
    this._modelClass = model;
    this._viewClass = view;
    this._handleClick = this._handleClick.bind(this);
  }

  init() {
    this._model = new this._modelClass(this._size);

    this._view = new this._viewClass({
        instance: Cell,
        handle: this._handleClick
      });

    this._view.createView(this._model.createBoard());
  }

  _handleClick() {
    console.log('_handeleClick');
  }
}
