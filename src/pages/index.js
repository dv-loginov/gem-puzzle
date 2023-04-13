import './index.css';
import { button, check, boardNode } from '../components/consts';
import { changeClass, icoChange, onListener } from '../components/utils/utils';
import { BoardController } from '../components/Board/BoardController';
import { BoardModel } from '../components/Board/BoardModel';
import { BoardView } from '../components/Board/BoardView';

const body = document.querySelector('body');

const { themeCheck, muteCheck } = check;
const { playNode: play, replayNode: replay,pauseNode: pause } = button;

onListener(themeCheck.nodeCheck, 'change', handleChangeTheme);
onListener(muteCheck.nodeCheck, 'change', handleChangeMute);

onListener(play, 'click', handleBtnPlay);
onListener(replay, 'click', handleBtnReplay);
onListener(pause, 'click', handleBtnPause);

const boardController = new BoardController({ model: BoardModel, view: BoardView });

boardController.init();

function handleChangeMute(instance) {
  instance.checked
    ? icoChange(muteCheck.nodeIco, muteCheck.icoOn)
    : icoChange(muteCheck.nodeIco, muteCheck.icoOff);
}

function handleChangeTheme(instance) {
  if (instance.checked) {
    icoChange(themeCheck.nodeIco, themeCheck.icoOn)
    changeClass(body, 'theme__dark', 'theme__light');
  } else {
    icoChange(themeCheck.nodeIco, themeCheck.icoOff)
    changeClass(body, 'theme__light', 'theme__dark');
  }
}

function handleBtnPlay() {
  console.log('handleBtnPlay');
  const delayMs = 1000;
  const block_0 = document.querySelector('.cell_zero');
  const block_1 = document.querySelector('.chip_1');
  block_1.style.transition = `all ${delayMs}ms`;
  block_1.style.transform = 'translateX(-116px)';
  setTimeout(() => {
    block_1.style.transform = 'translateX(0px)';
    block_0.appendChild(block_1)
  }, delayMs);
}

function handleBtnReplay() {
  console.log('handleBtnReplay');
}

function handleBtnPause() {
  console.log('handleBtnPause');
}

