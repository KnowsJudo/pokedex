import { Pokemon } from "../pokemon";

class Bulbasaur extends Pokemon {
  constructor(name, number, type, evolves) {
    super(name, number, type, evolves);
  }
  _stats = {
    hp: 45,
    attack: 49,
    defense: 49,
    special: 65,
    speed: 45,
  };
  _moves = {
    tackle: "Tackle",
    growl: "Growl",
    vineWhip: "Vine Whip",
    razorLeaf: "Razor Leaf",
  };
  get stats() {
    return this._stats;
  }

  get moves() {
    return this._moves;
  }
}

export const bulbasaur = new Bulbasaur("Bulbasaur", 153, "Grass", true);
