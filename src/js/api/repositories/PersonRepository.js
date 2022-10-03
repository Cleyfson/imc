class PersonRepository {
  _getLocalStorage;
  _setLocalStorage;

  constructor() {
    this._getLocalStorage = () => JSON.parse(localStorage.getItem('db')) || [];
    this._setLocalStorage = (db) =>
      localStorage.setItem('db', JSON.stringify(db));
  }

  // CRUD - create read update delete

  create(person) {
    let dbPerson = this._getLocalStorage();
    dbPerson.push(person);
    this._setLocalStorage(dbPerson);
  }

  read() {
    return this._getLocalStorage();
  }

  update(id, updatedPerson) {
    let dbPerson = this.read();
    dbPerson[id] = updatedPerson;
    this._setLocalStorage(dbPerson);
  }

  delete(id) {
    let dbPerson = this.read();
    dbPerson.splice(id, 1);
    this._setLocalStorage(dbPerson);
  }

  findId(id) {
    const dbPerson = this.read();
    return dbPerson[id];
  }
}

export default PersonRepository;
