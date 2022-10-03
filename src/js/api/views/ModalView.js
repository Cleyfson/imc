import { View } from './View.js';
import { ModalHelper } from '../helpers/ModalHelper.js';

class ModalView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return model.title ? ModalHelper.modal(model.title, model.text) : '';
  }
}

export default ModalView;
