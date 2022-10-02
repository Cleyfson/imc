class MessageView {
  constructor(element) {
    this._element = element;
  }

  _template(model) {
    return model.text
      ? `<p class='alert alert-success'>${model.text}</p>`
      : `<p></p>`;
  }

  update(model) {
    this._element.insertAdjacentHTML('afterbegin', this._template(model));
    setTimeout(() => (this._element.innerHTML = ''), 3000);
  }
}

export default MessageView;
