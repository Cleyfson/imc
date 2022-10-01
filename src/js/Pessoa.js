class Person {
  _name; // string type
  _age; // integer type
  _weight; // float type
  _height; // float type
  _imc; // float type
  static personCount = 0;

  constructor(name, age, weight, height) {
    this._name = name;
    this._age = age;
    this._weight = weight;
    this._height = height;
    this._imc = (this._weight / (this._height * this._height)).toFixed(2);
    Person.personCount += 1;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  find_imc() {
    return (this._weight / (this._height * this._height)).toFixed(2);
  }

  imcLevel() {
    let imcValue = this._imc;
    let level = '';

    if (imcValue <= 18.5) {
      level = 'underweight';
    } else if (imcValue <= 24.9) {
      level = 'normal weight';
    } else if (imcValue <= 29.9) {
      level = 'overweight';
    } else if (imcValue <= 34.9) {
      level = 'obesity level one';
    } else if (imcValue <= 39.9) {
      level = 'obesity level two';
    } else if ((imcValue) => 40.0) {
      level = 'obesity level three';
    } else {
      level = 'invalid weight';
    }

    return level;
  }
}

export default Person;
