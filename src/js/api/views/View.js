class View {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    throw new Error(`O metodo template deve ser implementado nessa classe`);
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}

export default View;
