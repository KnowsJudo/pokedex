import { Pokedex } from "./pokedex.js";

export class Pokemon extends Pokedex {
  constructor(name, number, type, evolves) {
    super(name, number, type);
    this._evolves = evolves;
  }

  get evolves() {
    return this._evolves;
  }
}
