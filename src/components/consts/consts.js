export const check = {
  themeCheck: {
    nodeCheck: document.querySelector(".checkbox_theme"),
    nodeIco: document.querySelector(".setting__theme"),
    icoOn: "light_mode",
    icoOff: "dark_mode",
  },
  muteCheck: {
    nodeCheck: document.querySelector(".checkbox_mute"),
    nodeIco: document.querySelector(".setting__mute"),
    icoOn: "volume_off",
    icoOff: "volume_up",
  },
};

export const button = {
  playNode: document.querySelector(".button_play"),
  replayNode: document.querySelector(".button_replay"),
  pauseNode: document.querySelector(".button_pause"),
}

export const selectNode = document.querySelector(".setting__size");

export const board = ".board";

export const cell = {
  template: '#cell-template',
  row: ".row",
  cell: ".cel",
  chip: '.chip',
  zero: '.cell_zero',
};
