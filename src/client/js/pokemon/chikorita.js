import { Pokemon } from "../pokemon";

class Chikorita extends Pokemon {
  constructor(name, number, type, evolves) {
    super(name, number, type, evolves);
  }
  _stats = {
    hp: 45,
    attack: 49,
    defense: 65,
    special: 57,
    speed: 45,
  };
  _moves = {
    tackle: "Tackle",
    growl: "Growl",
    razorLeaf: "Razor Leaf",
    synthesis: "Synthesis",
  };
  get stats() {
    return this._stats;
  }

  get moves() {
    return this._moves;
  }
}

export const chikorita = new Chikorita("Chikorita", 152, "Grass", true);
