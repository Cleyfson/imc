import PersonController from './src/js/api/controllers/PersonController';

let personController = new PersonController();

let form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  personController.add(event);
  personController._cleanForm();
});
