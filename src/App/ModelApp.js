export class ModelApp {
  constructor(observer, storage) {
    this.observer = observer;
    this.storage = storage;

    this.state = {
      buttons: {
        play: null,
        replay: null,
        pause: null,
      },
      checks: {
        mute: null,
        theme: null,
      },
      moves: null,
      timer: null,
      mute: null,
      theme: null,
    }

    this.themeIco = {
      icoOn: 'light_mode',
      icoOff: 'dark_mode',
    }

    this.muteIco = {
      icoOn: 'volume_up',
      icoOff: 'volume_off',
    }

  }

  init() {
    this.setInitButtonState();
    this.setTheme(true);
    this.setMute(true);
  }

  setPlayState() {
    this.setButton({play: false, replay: true, pause: true});
  }

  setPauseState() {
    this.setButton({play: true, replay: true, pause: false});
  }

  setReplayState() {
    this.setInitButtonState();
  }

  setInitButtonState() {
    this.setButton({play: true, replay: false, pause: false});
  };

  setButton({play, replay, pause}) {
    this.state.buttons.play = play;
    this.state.buttons.replay = replay
    this.state.buttons.pause = pause;
    this.observer.emit('model:setButton', this.state.buttons);
  }

  setTheme(theme) {
    this.state.theme = theme;
    let ico;
    theme
      ? ico = this.themeIco.icoOn
      : ico = this.themeIco.icoOff;
    this.observer.emit('model:setTheme', {theme: this.state.theme, ico: ico});
  }

  setMute(mute) {
    this.state.mute = mute;
    let ico;
    mute
      ? ico = this.muteIco.icoOn
      : ico = this.muteIco.icoOff;
    this.observer.emit('model:setMute', {theme: this.state.mute, ico: ico});
  }
}
