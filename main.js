import PersonController from './src/js/api/controllers/PersonController';
import ModalHelper from './src/js/api/helpers/ModalHelper';

let personController = new PersonController();

let form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  personController.add(event);

  ModalHelper.hideButtons();
  ModalHelper.modal('Cadastro', 'Pessoa cadastrada ou atualizada!');

  personController._cleanForm();
});

const formDeleteEdit = document.querySelector('#formDeleteEdit');
const btnDelete = document.querySelector('#btnDelete');
const btnEdit = document.querySelector('#btnEdit');

formDeleteEdit.addEventListener('submit', (event) => {
  event.preventDefault();
});

btnDelete.addEventListener('click', () => {
  let id = document.querySelector('#id').value;
  document.querySelector('#id').value = null;

  ModalHelper.showButtons();
  ModalHelper.modal('Apagar registro', `Deseja apagar o registro ${id} ?`);

  document.querySelector('#yes').addEventListener('click', () => {
    personController.delete(id);
    id = null;
    ModalHelper.closeModal();
  });
});

btnEdit.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  document.querySelector('#name').focus();

  let id = document.querySelector('#id').value;

  document.querySelector('#idPerson').value = id;
  document.querySelector('#id').value = null;

  let person = personController.findId(id);
  if (person) {
    let { _name, _age, _weight, _height } = person;
    personController.addForm(_name, _age, _weight, _height);
  }
});

ModalHelper.closeWindow();
