// export const checkTheme = {
//   checker: ".checkbox-theme",
//   icon: ".setting__theme",
// }
//
// export const checkMute = {
//   checker: ".checkbox-mute",
//   icon: ".setting__mute",
// }

export const check = {
  themeCheck: {
    nodeCheck: document.querySelector(".checkbox-theme"),
    nodeIco: document.querySelector(".setting__theme"),
    icoOn: "light_mode",
    icoOff: "dark_mode",
  },
  muteCheck: {
    nodeCheck: document.querySelector(".checkbox-mute"),
    nodeIco: document.querySelector(".setting__mute"),
    icoOn:"volume_off",
    icoOff: "volume_up",
  },
}
