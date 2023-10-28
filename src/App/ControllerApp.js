import { ViewApp } from './ViewApp';
import { ModelApp } from './ModelApp';
import { ControllerBoard } from '../components/Board/ControllerBoard';
import { checks, buttons, select } from '../core/constants';

export class ControllerApp {
  constructor(observer) {
    this._observer = observer;
    this._addStep = this._addStep.bind(this);
  }

  init() {
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
    this.init();

    this._viewApp = new ViewApp(this._observer);
    this._viewApp.init(this.buttons, this.checks, this.select);

    this._modelApp = new ModelApp(this._observer, this._storage);
    this._modelApp.init();

    this._controllerBoard = new ControllerBoard(this._observer, this._storage);
    this._controllerBoard.run();
  }

  handlePlay = () => {
    this._modelApp.setPlayState();
    this._modelApp.runTimer();
  }

  handlePause = () => {
    this._modelApp.setPauseState();
    this._modelApp.stopTimer();
  }

  handleReplay = () => {
    this._modelApp.setReplayState();
  }

  handleChangeMute = (node) => {
    this._modelApp.setMute(!node.checked);
  }

  handleChangeTheme = (node) => {
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
