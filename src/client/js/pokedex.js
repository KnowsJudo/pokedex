export class Pokedex {
  constructor(name, number, type) {
    this._name = name;
    this._number = number;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get number() {
    return this._number;
  }

  get type() {
    return this._type;
  }

  convertToJohto() {
    if (this._number >= 152 && this._number <= 160) {
      this._number = this._number - 151;
    }
  }
}
