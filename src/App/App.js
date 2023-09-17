import './App.css';
import { Storage } from '../core/Storage';
import { Observer } from '../core/Observer';
import { ControllerApp } from './ControllerApp';

const storage = new Storage();
const observer = new Observer();

const app = new ControllerApp(observer, storage);

app.run();


// const boardController = new BoardController(BoardModel, BoardView);
// boardController.init();



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

