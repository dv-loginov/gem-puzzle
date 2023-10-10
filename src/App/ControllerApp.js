import { ViewApp } from './ViewApp';
import { ModelApp } from './ModelApp';
import { ControllerBoard } from '../components/Board/ControllerBoard';
import { checks, buttons, select } from '../core/constants';

export class ControllerApp {
  constructor(observer, storage) {
    console.log('ControllerApp: constructor');
    this._observer = observer;
    this._storage = storage;
    this._addStep = this._addStep.bind(this);
  }

  init() {
    console.log('ControllerApp: init()');
    this.buttons = {
      play: { class: buttons.play, cb: this.handlePlay },
      replay: { class: buttons.replay, cb: this.handleReplay },
      pause: { class: buttons.pause, cb: this.handlePause },
    }

    this.checks = {
      theme: { dataInit: checks.themeCheck, cb: this.handleChangeTheme },
      mute: { dataInit: checks.muteCheck, cb: this.handleChangeMute },
    }

    this.select = {
      size: {
        class: select.classNode,
        options: select.options,
        cb: this.handleChangeSizeBoard
      },
    }
    
    this._observer.subscribe('viewBoard:addStep', this._addStep);
  }

  run() {
    console.log('ControllerApp: run()');
    this.init();

    this._viewApp = new ViewApp(this._observer);
    this._viewApp.init(this.buttons, this.checks, this.select);

    this._modelApp = new ModelApp(this._observer, this._storage);
    this._modelApp.init();

    this._controllerBoard = new ControllerBoard(this._observer, this._storage);
    this._controllerBoard.run();
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
    this._observer.emit('controllerApp:ChangeSizeBoard', node.selectedIndex);
    this._controllerBoard.changeSizeBoard(node.selectedIndex);
  }

  _addStep() {
    this._modelApp.addSteps();
  }
}
