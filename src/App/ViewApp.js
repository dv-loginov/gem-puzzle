import { sizesBoard, boardClass } from '../core/constants';
import { counterMovesClassValue, counterTimeClassValue } from '../core/constants';
export class ViewApp {
  constructor(observer) {
    console.log('ViewApp: constructor');
    this._body = document.querySelector('body');
    this._observer = observer;
    this._setButtons = this._setButtons.bind(this);
    this._setMute = this._setMute.bind(this);
    this._setTheme = this._setTheme.bind(this);
    this._setSize = this._setSize.bind(this);
    this._setSteps = this._setSteps.bind(this);
    this._setTime = this._setTime.bind(this);
  }

  init(buttons, checks, select) {
    console.log('ViewApp: init()');
    this._buttonsNode = {};
    this._checksNode = {};
    this._selectNode = {};
    this._boardNode = document.querySelector(boardClass);

    for (let button in buttons) {
      this._buttonsNode[button] = document.querySelector(buttons[button].class);
      this._onListener(this._buttonsNode[button], 'click', buttons[button].cb);
    }

    for (let check in checks) {
      this._checksNode[check] = {}
      this._checksNode[check].node = document.querySelector(checks[check].dataInit.classNode);
      this._checksNode[check].nodeIco = document.querySelector(checks[check].dataInit.classIco);
      this._onListener(this._checksNode[check].node, 'change', checks[check].cb);
    }

    this._selectNode = document.querySelector(select.size.class);
    sizesBoard.forEach((option) => {
      let newOption = new Option(`${option}x${option}`, option);
      this._selectNode.append(newOption);
    });
    this._onListener(this._selectNode, 'change', select.size.cb);


    this._counterMoviesValueNode = document.querySelector(counterMovesClassValue);
    this._counterTimeValueNode = document.querySelector(counterTimeClassValue);

    this._observer.subscribe('modelApp:setButton', this._setButtons);
    this._observer.subscribe('modelApp:setMute', this._setMute);
    this._observer.subscribe('modelApp:setTheme', this._setTheme);
    this._observer.subscribe('controllerApp:setSizeBoard', this._setSize);
    this._observer.subscribe('modelApp:setSteps', this._setSteps);
    this._observer.subscribe('modelApp:setTime', this._setTime);
  }

  _setTime(time) {
    this._counterTimeValueNode.textContent = time;
  }

  _setSteps(steps) {
    this._counterMoviesValueNode.textContent = steps;
  }

  _setSize(sizeIndex) {
    console.log(`ViewApp: setSize`);
    this._selectNode.selectedIndex = sizeIndex;
  }

  _setButtons(buttons) {
    for (let button in buttons) {
      buttons[button]
        ? this._changeClass(this._buttonsNode[button], false, 'button_disabled')
        : this._changeClass(this._buttonsNode[button], 'button_disabled', false)
    }

    !buttons.play
      ? this._changeClass(this._boardNode, 'board_open', null)
      : this._changeClass(this._boardNode, null, 'board_open');
  }

  _setMute({ mute, ico }) {
    this._icoChange(this._checksNode.mute.nodeIco, ico);
  }

  _setTheme({ theme, ico }) {
    this._icoChange(this._checksNode.theme.nodeIco, ico);
    theme
      ? this._changeClass(this._body, 'theme__dark', 'theme__light')
      : this._changeClass(this._body, 'theme__light', 'theme__dark');
  }

  //TODO Перенести в утилиты
  _icoChange(node, icoName) {
    node.textContent = icoName;
  }
  //TODO Перенести в утилиты
  _onListener(node, event, handle) {
    node.addEventListener(event, function () {
      handle(this);
    });
  }
  //TODO Перенести в утилиты
  _changeClass(node, classOn, classOff) {
    if (classOn) node.classList.add(classOn);
    if (classOff) node.classList.remove(classOff);
  }
}
