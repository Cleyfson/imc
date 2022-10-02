import Person from '../models/Person';
import PersonList from '../models/PersonList';
import PersonView from '../views/PersonView';

import Message from '../models/Message';
import MessageView from '../views/MessageView';

import PersonRepository from '../repositories/PersonRepository';

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

    this._personRepository = new PersonRepository();
    console.log(this._personRepository);
    let list = this._personRepository.read();
    console.log(list);

    this._personList = new PersonList(list);
    this._personView = new PersonView(document.querySelector('#data'));
    this._personView.update(this._personList);

    this._message = new Message();
    this._messageView = new MessageView(document.querySelector('#message'));
    this._messageView.update(this._message);
  }

  add(event) {
    event.preventDefault();

    const newPerson = this._createPerson();
    this._personList.add(newPerson);

    this._personRepository.create(newPerson);
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
