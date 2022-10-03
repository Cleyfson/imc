class Modal {
  constructor(title = '', text = '') {
    this._title = title;
    this._text = text;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }
}

export default Modal;
