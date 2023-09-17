export class ViewApp {
  constructor(observer) {
    this._body = document.querySelector('body');
    this._observer = observer;
    this._setButtons = this._setButtons.bind(this);
    this._setMute = this._setMute.bind(this);
    this._setTheme = this._setTheme.bind(this);
  }

  init(buttons, checks, select) {
    this._buttonsNode = {};
    this._checksNode = {};
    this._selectNode = {};

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
    console.log(select);
    this._selectNode = document.querySelector(select.size.class);
    this._onListener(this._selectNode, 'change', select.size.cb);

    this._observer.subscribe('modelApp:setButton', this._setButtons);
    this._observer.subscribe('modelApp:setMute', this._setMute);
    this._observer.subscribe('modelApp:setTheme', this._setTheme);
    this._observer.subscribe('modelBorder:setSize', this._setSize);
  }

  _setButtons(buttons) {
    for (let button in buttons) {
      buttons[button]
        ? this._changeClass(this._buttonsNode[button], false, 'button_disabled')
        : this._changeClass(this._buttonsNode[button], 'button_disabled', false)
    }
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

  _icoChange(node, icoName) {
    node.textContent = icoName;
  }

  _onListener(node, event, handle) {
    node.addEventListener(event, function () {
      handle(this);
    });
  }

  _changeClass(node, classOn, classOff) {
    if (classOn) node.classList.add(classOn);
    if (classOff) node.classList.remove(classOff);
  }
}
