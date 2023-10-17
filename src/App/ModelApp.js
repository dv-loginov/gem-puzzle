export class ModelApp {
  constructor(observer, storage) {
    console.log('ModelApp: constructor');
    this._observer = observer;
    this._storage = storage;

    this._state = {
      buttons: {
        play: null,
        replay: null,
        pause: null,
      },
      checks: {
        mute: null,
        theme: null,
      },
      mute: null,
      theme: null,
      steps: null,
      time: null,
    }

    this._themeIco = {
      icoOn: 'light_mode',
      icoOff: 'dark_mode',
    }

    this._muteIco = {
      icoOn: 'volume_up',
      icoOff: 'volume_off',
    }

    this._addTime = this._addTime.bind(this);
  }

  init() {
    console.log('ModelApp: init()');
    this._setInitButtonState();
    this.setTheme(false);
    this.setMute(true);
    this.setSteps(0);
    this.setTime(0);
  }

  setTime(time) {
    this._state.time = time;
    this._observer.emit('modelApp:setTime', time);
  }

  _addTime() {
    this._state.time++;
    this.setTime(this._state.time);
  }

  runTimer() {
    this._timer = setInterval(this._addTime, 1000);
  }

  stopTimer() {
    clearTimeout(this._timer);
  }

  ressetTimer() { }

  setSteps(step) {
    this._state.steps = step;
    this._observer.emit('modelApp:setSteps', step);
  }

  addSteps() {
    this._state.steps++;
    this.setSteps(this._state.steps);
  }

  setPlayState() {
    this.setButton({ play: false, replay: true, pause: true });
  }

  setPauseState() {
    this.setButton({ play: true, replay: true, pause: false });
  }

  setReplayState() {
    this._setInitButtonState();
  }

  _setInitButtonState() {
    this.setButton({ play: true, replay: false, pause: false });
  };

  setButton({ play, replay, pause }) {
    this._state.buttons.play = play;
    this._state.buttons.replay = replay
    this._state.buttons.pause = pause;
    this._observer.emit('modelApp:setButton', this._state.buttons);
  }

  setTheme(theme) {
    this._state.theme = theme;
    let ico;
    this._state.theme
      ? ico = this._themeIco.icoOn
      : ico = this._themeIco.icoOff;
    this._observer.emit('modelApp:setTheme', { theme: this._state.theme, ico: ico });
  }

  setMute(mute) {
    this._state.mute = mute;
    let ico;
    this._state.mute
      ? ico = this._muteIco.icoOn
      : ico = this._muteIco.icoOff;
    this._observer.emit('modelApp:setMute', { mute: this._state.mute, ico: ico });
  }
}
