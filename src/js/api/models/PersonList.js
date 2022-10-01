class PersonList {
  constructor() {
    this._personList = [];
  }

  add(person) {
    this._personList.push(person);
  }

  get personList() {
    return [].concat(this._personList);
  }
}
