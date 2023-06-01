export class ButtonsController {
  constructor( model, view, handle) {
    this._modelClass = model;
    this._viewClass = view;
    this._handle = handle;
    this._handleButtonClick = this._handleButtonClick.bind(this);
    console.log(this._handle);
  }

  init() {
    this._model = new this._modelClass();
    this._view = new this._viewClass(this._model.getAll(), this._handleButtonClick);
    this._view.init();
  }

  _handleButtonClick(button) {
    this._handle(button);
  }
}
