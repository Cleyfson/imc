import Person from '../models/Person';
import PersonList from '../models/PersonList';
import PersonView from '../views/PersonView';

import Message from '../models/Message';
import MessageView from '../views/MessageView';

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

    this._personList = new PersonList();
    this._personView = new PersonView(document.querySelector('#data'));
    this._personView.update(this._personList);

    this._message = new Message();
    this._messageView = new MessageView(document.querySelector('#message'));
    this._messageView.update(this._message);
  }

  add(event) {
    event.preventDefault();

    this._personList.add(this._createPerson());
    this._personView.update(this._personList);

    this._message.text = 'Pessoa cadastrada com sucesso!';
    this._messageView.update(this._message);
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
