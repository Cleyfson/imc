class PersonList {
  constructor() {
    this._personList = [];
  }

  add(person) {
    this._personList.push(person);
  }

  //for safety reasons this method returns a copy of the person list, and not the array itself
  get personList() {
    return [].concat(this._personList);
  }
}

export default PersonList;
