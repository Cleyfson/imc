import Person from '../models/Person';

class PersonController {
  _inputName;
  _inputAge;
  _inputWeight;
  _inputHeight;

  constructor() {
    this._inputName = document.querySelector('#name');
    this._inputAge = document.querySelector('#age');
    this._inputWeight = document.querySelector('#weight');
    this._inputHeight = document.querySelector('#height');
  }

  add(event) {
    event.preventDefault();

    this._createPerson();
    console.log(this._createPerson());
  }

  _createPerson() {
    return new Person(
      this._inputName.value,
      this._inputAge.value,
      this._inputWeight.value,
      this._inputHeight.value
    );
  }

  _cleanForm() {
    (this._inputName.value = ''),
      (this._inputAge.value = ''),
      (this._inputWeight.value = ''),
      (this._inputHeight.value = '');

    this._inputName.focus();
  }
}

export default PersonController;
