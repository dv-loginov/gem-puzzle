import './index.css';
import { button, check } from '../components/consts/consts.js';
import { changeClass, icoChange, onListener } from '../components/utils/utils';

const body = document.querySelector('body');

const { themeCheck, muteCheck } = check;
const { playNode: play, replay,pause } = button;

onListener(themeCheck.nodeCheck, 'change', handleChangeTheme);
onListener(muteCheck.nodeCheck, 'change', handleChangeMute);

onListener(button.playNode, 'click', handleBtnPlay);
onListener(button.replayNode, 'click', handleBtnReplay);
onListener(button.pauseNode, 'click', handleBtnPause);

function handleChangeMute(instance) {
  instance.checked
    ? icoChange(muteCheck.nodeIco, muteCheck.icoOn)
    : icoChange(muteCheck.nodeIco, muteCheck.icoOff);
}

function handleChangeTheme(instance) {
  if (instance.checked) {
    icoChange(themeCheck.nodeIco, themeCheck.icoOn)
    changeClass( body, 'theme__dark', 'theme__light');
  } else {
    icoChange(themeCheck.nodeIco, themeCheck.icoOff)
    changeClass(body, 'theme__light', 'theme__dark');
  }
}

function handleBtnPlay(){
  console.log('handleBtnPlay');

}

function handleBtnReplay(){
  console.log('handleBtnReplay');
}

function handleBtnPause(){
  console.log('handleBtnPause');
}

