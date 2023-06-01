import { buttons } from '../../core/constants';

export class ButtonsModel {
  constructor() {
    this._buttons = {
      play: {
        class: buttons.playClass,
        state: true,
      },
      replay: {
        class: buttons.replayClass,
        state: false,
      },
      pause: {
        class: buttons.pauseClass,
        state: false,
      },
    }
  }

  getAll() {
    return this._buttons;
  }

  get(button) {
    return this._buttons[button].state;
  }

  toggle(button) {
    this._buttons[button].state = !this._buttons[button].state;
  }
}
