import { ViewApp } from './ViewApp';
import { ModelApp } from './ModelApp';
import { checks, buttons, select } from '../core/constants';

export class ControllerApp {
  constructor(observer, storage) {
    this._observer = observer;
    this._storage = storage;
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

    this.select = {
      size: {class: select.classNode, cb: this.handleChangeSizeBoard},
    }

  }

  run() {
    this.init();

    this._viewApp = new ViewApp(this._observer);
    this._viewApp.init(this.buttons, this.checks, this.select);

    this._modelApp = new ModelApp(this._observer, this._storage);
    this._modelApp.init();
    
    // init board
  }

  handlePlay = () => {
    console.log("start game");
    this._modelApp.setPlayState();
  }

  handlePause = () => {
    console.log("pause game");
    this._modelApp.setPauseState();
  }

  handleReplay = () => {
    console.log("replay game");
    this._modelApp.setReplayState();
  }

  handleChangeMute = (node) => {
    console.log(!node.checked);
    this._modelApp.setMute(!node.checked);
  }

  handleChangeTheme = (node) => {
    console.log(node.checked);
    this._modelApp.setTheme(node.checked);
  }

  handleChangeSizeBoard = (node) => {
    console.log(`Изменение размера доски на ${node.options[node.selectedIndex].value}`);

    // this._model.setSizeBoard(node.options[node.selectedIndex].value);
  }
}
