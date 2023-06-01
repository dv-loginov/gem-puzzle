import './App.css';
import { Storage } from '../core/Storage';
import { Observer } from '../core/Observer';
import { ControllerApp } from './ControllerApp';

const storage = new Storage();
const observer = new Observer();

const app = new ControllerApp(observer, storage);

app.run();

//
// import { ButtonsController } from '../components/Buttons/ButtonsController';
// import { ButtonsModel } from '../components/Buttons/ButtonsModel';
// import { ButtonsView } from '../components/Buttons/ButtonsView';
//
// const body = document.querySelector('body');
//
// const {themeCheck, muteCheck} = check;
//
// onListener(themeCheck.nodeCheck, 'change', handleChangeTheme);
// onListener(muteCheck.nodeCheck, 'change', handleChangeMute);
//
// const boardController = new BoardController(BoardModel, BoardView);
// boardController.init();
//
// const buttonsController = new ButtonsController(
//   ButtonsModel,
//   ButtonsView,
//   handleButtonClick
// );
// buttonsController.init();
//
// function handleButtonClick(data) {
//   console.log('handleButtonClick');
//   console.log(data);
// }
//
// function handleChangeMute(instance) {
//   instance.checked
//     ? icoChange(muteCheck.nodeIco, muteCheck.icoOn)
//     : icoChange(muteCheck.nodeIco, muteCheck.icoOff);
// }
//
// function handleChangeTheme(instance) {
//   if (instance.checked) {
//     icoChange(themeCheck.nodeIco, themeCheck.icoOn)
//     changeClass(body, 'theme__dark', 'theme__light');
//   } else {
//     icoChange(themeCheck.nodeIco, themeCheck.icoOff)
//     changeClass(body, 'theme__light', 'theme__dark');
//   }
// }



// function handlePlayClick() {
//   console.log('handleBtnPlay');
//   // const delayMs = 1000;
//   // const block_0 = document.querySelector('.cell_zero');
//   // const block_1 = document.querySelector('.chip_1');
//   // block_1.style.transition = `all ${delayMs}ms`;
//   // block_1.style.transform = 'translateX(-116px)';
//   // setTimeout(() => {
//   //   block_1.style.transform = 'translateX(0px)';
//   //   block_0.appendChild(block_1)
//   // }, delayMs);
// }
//
// function handleReplayClick() {
//   console.log('handleBtnReplay');
// }
//
// function handlePauseClick() {
//   console.log('handleBtnPause');
// }

