import './index.css';
import { check } from '../components/consts/consts.js';
import { changeClass, icoChange, onListener } from '../components/utils/utils';

const body = document.querySelector('body');

const {themeCheck, muteCheck} = check;

onListener(themeCheck.nodeCheck, 'change', handleChangeTheme);
onListener(muteCheck.nodeCheck, 'change', handleChangeMute);

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
