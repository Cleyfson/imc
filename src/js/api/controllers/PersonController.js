import Person from '../models/Person';
import PersonList from '../models/PersonList';
import PersonView from '../views/PersonView';

// import Message from '../models/Message';
// import MessageView from '../views/MessageView';

import { Modal } from '../models/Modal';
import { ModalView } from '../views/ModalView';

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
    let list = this._personRepository.read();

    this._personList = new PersonList(list);
    this._personView = new PersonView(document.querySelector('#data'));
    this._personView.update(this._personList);

    // this._message = new Message();
    // this._messageView = new MessageView(document.querySelector('#message'));
    // this._messageView.update(this._message);

    this._modal = new Modal();
    this._modalView = new ModalView(document.querySelector('#messageModal'));
    this._modalView.update(this._modal);
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

  addForm(name, age, weight, height) {
    this._inputName.value = name;
    this._inputAge.value = age;
    this._inputWeight.value = weight;
    this._inputHeight.value = height;
  }

  add(event) {
    event.preventDefault();

    const id = document.querySelector('#idPerson').value;

    if (!id) {
      const newPerson = this._createPerson();
      this._personList.add(newPerson);
      this._personRepository.create(newPerson);
      this._personView.update(this._personList);

      this._modalView.update(this._modal);
      // this._message.text = 'Pessoa cadastrada com sucesso!';
      // this._messageView.update(this._message);
    } else {
      this.update(id);
    }
  }

  update(id) {
    let updatedPerson = this._createPerson();

    this._personRepository.update(id, updatedPerson);
    this._personList.update(id, updatedPerson);
    this._personView.update(this._personList);
    document.querySelector('#idPerson').value = null;
  }

  delete(id) {
    if (!id) {
      return;
    }
    this._personList.remove(id);
    this._personView.update(this._personList);
    this._personRepository.delete(id);
  }

  findId(id) {
    let searchedPerson = this._personRepository.findId(id);
    return searchedPerson;
  }
}

export default PersonController;
