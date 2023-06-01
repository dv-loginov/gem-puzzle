export class ViewApp {
  constructor(observer) {
    this.observer = observer;
    this.setButtons = this.setButtons.bind(this);
  }

  init(buttons, checks) {
    this.buttonsNode = {};
    this.checksNode = {};

    for (let button in buttons) {
      this.buttonsNode[button] = document.querySelector(buttons[button].class);
      this.onListener(this.buttonsNode[button], 'click', buttons[button].cb);
    }

    for (let check in checks) {
      this.checksNode[check] = {}
      this.checksNode[check].node = document.querySelector(checks[check].dataInit.classNode);
      this.onListener(this.checksNode[check].node, 'change', checks[check].cb);
    }

    this.observer.subscribe('model:setButton', this.setButtons);
    this.observer.subscribe('model:setMute', this.setMute);
    this.observer.subscribe('model:setTheme', this.setTheme);
  }

  setButtons(buttons) {
    for (let button in buttons) {
      buttons[button]
        ? this.changeClass(this.buttonsNode[button], false, 'button_disabled')
        : this.changeClass(this.buttonsNode[button], 'button_disabled', false)
    }
  }

  setMute({mute, ico}) {
    console.log(ico);
  }

  setTheme({theme, ico}) {
    console.log(ico);
  }

  // icoChange(node, icoName) {
  //   node.textContent = icoName;
  // }

  onListener(node, event, handle) {
    node.addEventListener(event, function () {
      handle(this);
    });
  }

  changeClass(node, classOn, classOff) {
    if (classOn) node.classList.add(classOn);
    if (classOff) node.classList.remove(classOff);
  }
}
