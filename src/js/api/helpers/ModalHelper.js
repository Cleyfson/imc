class ModalHelper {
  static modal(title, text) {
    this.openModal();
    document.querySelector('#title').innerHTML = title;
    document.querySelector('#messageModal').innerHTML = `<p>${text}</p>`;
  }

  static openModal() {
    document.querySelector('#modal').classList.add('active');
  }

  static closeModal() {
    document.querySelector('#modal').classList.remove('active');
  }

  static closeWindow() {
    document
      .querySelector('#modalClose')
      .addEventListener('click', this.closeModal);
    document.querySelector('#no').addEventListener('click', this.closeModal);
  }

  static hideButtons() {
    document.querySelector('#modalButtons').classList.remove('show');
    document.querySelector('#modalButtons').classList.add('hide');
  }

  static showButtons() {
    document.querySelector('#modalButtons').classList.remove('hide');
    document.querySelector('#modalButtons').classList.add('show');
  }
}

export default ModalHelper;
