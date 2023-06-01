import { ViewApp } from './ViewApp';
import { ModelApp } from './ModelApp';
import { checks, buttons } from '../core/constants';

export class ControllerApp {
  constructor(observer, storage) {
    this.observer = observer;
    this.storage = storage;

  }

  init() {
    this.buttons = {
      play: {class: buttons.play, cb: this.handlePlay},
      replay: {class: buttons.replay, cb: this.handleReplay},
      pause: {class: buttons.pause, cb: this.handlePause},
    }

    this.checks = {
      theme: {dataInit: checks.themeCheck, cb: this.handleChangeTheme},
      mute: {dataInit: checks.muteCheck, cb: this.handleChangeMute},
    }

  }

  handlePlay = () => {
    console.log("start game");
    this.model.setPlayState();
  }

  handlePause = () => {
    console.log("pause game");
    this.model.setPauseState();
  }

  handleReplay = () => {
    console.log("replay game");
    this.model.setReplayState();
  }

  handleChangeMute = (node) => {
    console.log(node.checked);
    this.model.setMute(node.checked);
  }

  handleChangeTheme = (node) => {
    console.log(node.checked);
    this.model.setTheme(node.checked);
  }

  run() {
    this.init();

    this.view = new ViewApp(this.observer);
    this.view.init(this.buttons, this.checks);

    this.model = new ModelApp(this.observer, this.storage);
    this.model.init();
  }
}
