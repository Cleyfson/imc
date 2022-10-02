class PersonList {
  constructor(list = []) {
    this._personList = list;
  }

  add(person) {
    this._personList.push(person);
  }

  remove(id) {
    this._personList.splice(id, 1);
  }

  update(id, updatedPerson) {
    this._personList[id] = updatedPerson;
  }

  //for safety reasons this method returns a copy of the person list, and not the array itself
  get personList() {
    return [].concat(this._personList);
  }
}

export default PersonList;
