import PersonController from './src/js/api/controllers/PersonController';

let personController = new PersonController();

let form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  personController.add(event);
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
  openModal(`Deseja apagar o registro ${id} ? `);

  document.querySelector('#yes').addEventListener('click', () => {
    personController.delete(id);
    closeModal();
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

  console.log('Editar registro' + id);

  document.querySelector('#idPerson').value = id;
  document.querySelector('#id').value = null;

  let person = personController.findId(id);
  if (person) {
    let { _name, _age, _weight, _height } = person;
    personController.addForm(_name, _age, _weight, _height);
  }
});

const openModal = (message) => {
  document.querySelector('#modal').classList.add('active');
  document.querySelector('#messageModal').innerHTML = `<h2>${message}</h2>`;
};

const closeModal = () => {
  document.querySelector('#modal').classList.remove('active');
};

document.querySelector('#modalClose').addEventListener('click', closeModal);
document.querySelector('#no').addEventListener('click', closeModal);
