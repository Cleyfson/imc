import View from './View';

class MessageView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return model.text
      ? `<p class='alert alert-success'>${model.text}</p>`
      : `<p></p>`;
  }

  update(model) {
    this._element.insertAdjacentHTML('afterbegin', this.template(model));
    setTimeout(() => (this._element.innerHTML = ''), 3000);
  }
}

export default MessageView;
