import { disabledButtonClass } from '../../core/constants';
import { changeClass } from '../../core/utils';

export class ButtonsView {
  constructor(buttons, handle) {
    this._buttons = buttons;
    this._handle = handle;
  }

  init() {
    for (let key in this._buttons) {
      this._buttons[key].node = document.querySelector(this._buttons[key].class);

      if (!this._buttons[key].state)
        changeClass(this._buttons[key].node, disabledButtonClass, '');

      this._setEventListener(this._buttons[key].node, key);
    }
  }

  _setEventListener(node, key) {
    node.addEventListener('click', () => this._handle(key));
  }
}
