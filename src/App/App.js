import './App.css';
import { Observer } from '../core/Observer';
import { ControllerApp } from './ControllerApp';

const observer = new Observer();

const app = new ControllerApp(observer);

app.run();