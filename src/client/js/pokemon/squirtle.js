import { Pokemon } from "../pokemon";

class Squirtle extends Pokemon {
  constructor(name, number, type, evolves) {
    super(name, number, type, evolves);
  }
  _stats = {
    hp: 44,
    attack: 48,
    defense: 65,
    special: 57,
    speed: 43,
  };
  _moves = {
    tackle: "Tackle",
    tailWhip: "Tail Whip",
    waterGun: "Water Gun",
    bite: "Bite",
  };
  get stats() {
    return this._stats;
  }

  get moves() {
    return this._moves;
  }
}

export const squirtle = new Squirtle("Squirtle", 7, "Water", true);
