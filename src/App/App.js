import './App.css';
import { Storage } from '../core/Storage';
import { Observer } from '../core/Observer';
import { ControllerApp } from './ControllerApp';

const storage = new Storage();
const observer = new Observer();

const app = new ControllerApp(observer, storage);

app.run();